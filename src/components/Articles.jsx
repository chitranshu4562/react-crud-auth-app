import { useState } from "react";
import Article from "./article/Article";
import ArticleForm from "./article-form/ArticleForm";
import { generateUniqueId } from "../utils";

export default function Articles() {
  const [articles, setArticles] = useState([
    {
      id: 1731431079374,
      title: "First title",
      description: "First description",
    },
    {
      id: 1731431117326,
      title: "Second title",
      description: "Second description",
    }
  ]);

  const receiveValuesFromArticleForm = (values) => {
    console.log('Values in parent component: ', values);
    const temp = {
        ...values,
        id: generateUniqueId()
    }
    setArticles((prevState) => {
        return [
            ...prevState,
            temp
        ]
    })
  }
  ``
  return (
    <>
      <ArticleForm onSubmit={receiveValuesFromArticleForm}/>
      <h1>Articles Components</h1>
      {articles.map((article) => (
        <Article key={article.id} title={article.title} description={article.description} />
      ))}
    </>
  );
}
