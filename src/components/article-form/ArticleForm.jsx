import {useEffect, useState} from "react";
import classes from "./ArticleForm.module.css";

export default function ArticleForm({ titleValue = "", descriptionValue = "", onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = {
        title,
        description
    }
    onSubmit(temp);
    setTitle('');
    setDescription('');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    setTitle(titleValue)
    setDescription(descriptionValue)
  }, [titleValue, descriptionValue]);

  
  return (
    <>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <input
          type="text"
          placeholder="Enter title"
          className="form-control my-2"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="form-control my-2"
          value={description}
          onChange={handleDescriptionChange}
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
