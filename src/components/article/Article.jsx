import classes from "./Article.module.css";

export default function Article({ articleId, title, description, onDelete }) {
    const handleDeleteArticle = () => {
        if (confirm('Are you want to delete?')) {
            onDelete(articleId);
        }
    }

    return (
        <div className={classes.articleBox}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
                <button className="btn btn-primary" onClick={handleDeleteArticle}>Delete</button>
            </div>
        </div>
    )
}
