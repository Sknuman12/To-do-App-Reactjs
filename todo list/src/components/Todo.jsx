// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Todo = ({ todos, setTodos, setId }) => {
  const deleteTodo = (id) => {
    // eslint-disable-next-line react/prop-types
    setTodos(todos.filter((d) => d.id != id));
  };
  return (
    <>
      <div className="container text-center">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Discription</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {todos.map((d) => {
            return (
              <>
                <tbody key={d.id}>
                  <tr>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td>
                      <button
                        onClick={() => setId(d.id)}
                        className="btn btn-warning mx-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTodo(d.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Todo;
