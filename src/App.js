import { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import Todos from "./components/Todo";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Đây là sách lập trình hướng đối tượng",
    },
    {
      id: 2,
      title: "Đây là sách lập trình website nâng cao",
    },
    {
      id: 3,
      title: "Đây là sách lập trình PHP",
    },
  ]);

  function handleTodoClick(index) {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className='app'>
      <ColorBox />
      <Todos todoList={todoList} onTodoClick={handleTodoClick} />;
    </div>
  );
}

export default App;
