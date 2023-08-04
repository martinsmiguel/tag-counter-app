import React, { useState } from "react";
import "../styles/TagCounter.css";
import axios, { AxiosError } from "axios";

interface TagInfo {
  tag: string;
  quantidade: number;
}

interface PageInfo {
  url: string;
  tags: { [tag: string]: number };
}

const TagCounter: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [pageInfoList, setPageInfoList] = useState<PageInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const fetchTagInfo = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!url) {
      alert("Digite uma URL válida.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(`http://localhost:8000/fetch-urls`, {
        params: { urls: url },
      });
      setLoading(false);

      if (Array.isArray(data)) {
        setPageInfoList(data);
      } else {
        setError("Resposta inválida do servidor.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error("Error fetching URL:", error.response.data);
          setError("Erro ao obter as tags da URL. " + error.response.data.message);
        } else {
          console.error("Error fetching URL:", error.message);
          setError("Erro desconhecido ao obter as tags da URL.");
        }
      } else {
        console.error("Error fetching URL:", error);
        setError("Erro desconhecido ao obter as tags da URL.");
      }
      setPageInfoList([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tag-counter">
      <form onSubmit={fetchTagInfo}>
        <div className="input-container">
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            placeholder="Digite a URL"
          />
          <button type="submit">Contar Tags</button>
        </div>
      </form>

      {loading && <p>Carregando...</p>}

      {error && <p className="error-message">{error}</p>}

      {pageInfoList.length > 0 && (
        <div className="table-list-container">
          {pageInfoList.map((pageInfo) => (
            <div key={pageInfo.url} className="page-info-container">
              <div className="table-container">
                <table className="tag-table">
                  <thead>
                    <tr>
                      <th>Tag</th>
                      <th>Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(pageInfo.tags).map(([tag, quantidade]) => (
                      <tr key={tag}>
                        <td>{tag}</td>
                        <td>{quantidade}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <td colSpan={2}><p className="url">{pageInfo.url}</p></td>
                  </tfoot>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagCounter;