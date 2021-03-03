
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=8a0c198a46ef4dc5b33eaf28e42d2de1'
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
      <h1>Top News:{articles.length} </h1>
      {
        articles.map(article => <News article={article}></News> )
      }
    </div>
  );
}

export default App;
