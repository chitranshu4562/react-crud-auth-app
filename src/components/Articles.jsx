import classes from "./Articles.module.css";
import { useState } from "react";
import Article from "./article/Article";
import ArticleForm from "./article-form/ArticleForm";
import { generateUniqueId } from "../utils";

export default function Articles() {
    const [articleToEdit, setArticleToEdit] = useState(null);
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

  const deleteArticleById = (articleId) => {
      setArticles((prevState) => {
          return prevState.filter((article) => article.id !== articleId)
      })
  }

  const handleEditArticle = (articleId) => {
      const obj = articles.find((article) => article.id === articleId)
      console.log(obj);
      setArticleToEdit(obj);
  }

  return (
    <>
        {articleToEdit ? <ArticleForm
            titleValue={articleToEdit.title}
            descriptionValue={articleToEdit.description}
            onSubmit={receiveValuesFromArticleForm}/> : <ArticleForm onSubmit={receiveValuesFromArticleForm}/>}
      <div className={classes.articleContainer}>
          {articles.map((article) => (
              <Article key={article.id}
                       articleId={article.id}
                       title={article.title}
                       description={article.description}
                       onDelete={deleteArticleById}
                       onEdit={handleEditArticle}
              />
          ))}
      </div>
    </>
  );
}
