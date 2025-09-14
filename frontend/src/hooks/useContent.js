
import { useState, useEffect } from 'react';
import Mustache from 'mustache';

export const useContent = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/src/data/content.json')
      .then(response => response.json())
      .then(data => {
        const renderedContent = JSON.parse(Mustache.render(JSON.stringify(data), data));
        setContent(renderedContent);
      })
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return content;
};
