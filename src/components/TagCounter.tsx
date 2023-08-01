// src/components/TagCounter.tsx

import React, { useState } from 'react';
import '../styles/TagCounter.css'
import axios from 'axios';

interface TagInfo {
  tag: string;
  quantidade: number;
}

const TagCounter: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [tagInfoList, setTagInfoList] = useState<TagInfo[]>([]);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const fetchTagInfo = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!url) {
      alert('Digite uma URL válida.');
      return;
    }
    console.log(url)
    try {
      const {data} = await axios.get(`http://localhost:8000/fetch-url`, {
        params: {url}
      });
      setTagInfoList(data);
      console.log(data);
      const object = Object.entries(data)
      console.log(object)
      const tagsFiltered = object.map(tag => {
        return {
            tag: tag[0],
            quantidade: tag[1]
        }
      }) as TagInfo[]
      setTagInfoList(tagsFiltered)
    } catch (error) {
      console.error('Error fetching URL:', error);
      console.log(`url: ${url}`);
      alert('Erro ao obter as tags da URL. Verifique a URL informada.');
      setTagInfoList([]);
    }
  };

  return (
    <div className="tag-counter">
      <form >
        <div className="input-container">
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            placeholder="Digite a URL"
          />
          <button onClick={fetchTagInfo} type="submit">Contar Tags</button>
        </div>
      </form>

    <p
    >
        Site consultado: {url}
    </p>
      {tagInfoList.length > 0 && (
        <table className="tag-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {tagInfoList.map(({ tag, quantidade }) => (
              <tr key={tag}>
                <td>{tag}</td>
                <td>{quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TagCounter;