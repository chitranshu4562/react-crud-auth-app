import classes from "./Article.module.css";

export default function Article({ articleId, title, description, onDelete, onEdit }) {
    const handleDeleteArticle = () => {
        if (confirm('Are you want to delete?')) {
            onDelete(articleId);
        }
    }

    const editArticle = () => {
        onEdit(articleId);
    }

    return (
        <div className={classes.articleBox}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary" onClick={editArticle}>Edit</button>
                <button className="btn btn-danger" onClick={handleDeleteArticle}>Delete</button>
            </div>
        </div>
    )
}
