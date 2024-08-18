import React, { useEffect, useState } from "react";

const Form = ({ setTodos, todos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updatebyid(id);
      setId("");
    } else {
      const obj = {
        id: Math.random(),
        title,
        description,
      };
      setTodos([...todos, obj]);
    }
    setId("");

    setTitle("");
    setDescription("");
  };
  useEffect(() => {
    if (id) {
      const updated = todos.filter((d) => d.id === id);
      console.log(updated);
      setTitle(updated[0].title);
      setDescription(updated[0].description);
    }
  }, [id]);

  const updatebyid = (id) => {
    const objs = {
      title,
      description,
    };
    setTodos((prevdata) =>
      prevdata.map((todo) => (todo.id === id ? { ...todo, ...objs } : todo))
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="container my-5 text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className="mx-2"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="mx-2"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {id && <button className="btn btn-warning">Edit</button>}
          {!id && <button className="btn btn-warning">Add</button>}
        </div>
      </form>
    </>
  );
};

export default Form;
