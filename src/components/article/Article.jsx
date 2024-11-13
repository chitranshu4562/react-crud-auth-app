import classes from "./Article.module.css";

export default function Article({ title, description }) {
    return (
        <div className={classes.articleBox}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}