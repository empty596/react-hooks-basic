import React, { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.scss";
import ColorList from "./components/ColorList";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm";
import Clock from "./components/Clock";
import ClockBetter from "./components/ClockBetter";
import MagicBox from "./components/MagicBox";

App.propTypes = {};

//Todo List
function App(props) {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Sách Lập Trình Hướng Đối Tượng",
    },
    {
      id: 2,
      name: "Sách Lập Trình Hướng Hàm",
    },
    {
      id: 3,
      name: "Sách Lập Trình Hướng Sự Kiện",
    },
    {
      id: 4,
      name: "Sách Lập Trình Website",
    },
  ]);

  //Xóa Todo
  function handleTodoClick(currTodo) {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((todo) => todo.id === currTodo.id);
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  //Add Todo
  function handleFormSubmit(value) {
    const newTodoList = [...todoList];
    const newValue = {
      ...value,
      id: newTodoList.length + 1,
    };
    newTodoList.push(newValue);
    setTodoList(newTodoList);
  }

  //dùng điều kiện thay đổi useEffect

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });

  //dùng useEffect call API
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filter);
        const request = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(request);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPostList();
  }, [filter]);

  //pagination
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  function handleClickPageChange(newPage) {
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  //searchForm

  function handleFormSubmit(value) {
    setFilter({
      ...filter,
      _page: 1,
      title_like: value,
    });
  }

  //unMount Clock
  const [hide, setHide] = useState(true);

  return (
    <div className='app'>
      <h1>Đây là Post List</h1>

      <MagicBox />
      {/* <ColorList />
      <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onTodoFormSubmit={handleFormSubmit} /> */}
      {/* <PostList postList={postList} />
      <Pagination pagination={pagination} onClickPageChange={handleClickPageChange} />
      <SearchForm onSubmit={handleFormSubmit} />
      {hide && <Clock />}
      <ClockBetter /> */}

      {/* <button onClick={() => setHide(false)}>Hide Clock</button> */}
    </div>
  );
}

export default App;
