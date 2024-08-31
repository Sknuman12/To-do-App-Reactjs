import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is brand new Title1",
      description: "This is brand new Discription1",
    },
    {
      id: 2,
      title: "This is brand new Title2",
      description: "This is brand new Discription2",
    },
    {
      id: 3,
      title: "This is brand new Title3",
      description: "This is brand new Discription3",
    },
  ]);

  const [id, setId] = useState("");
  // console.log(id);

  return (
    <>
      <div className="container">
        <h1 className="text-center">React To do List Application</h1>
      </div>
      <Form todos={todos} setTodos={setTodos} id={id} setId={setId} />
      <Todo todos={todos} setTodos={setTodos} setId={setId} />
    </>
  );
}
export default App;
