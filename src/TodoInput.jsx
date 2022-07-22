import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";

import { Input } from "antd";
import { Button } from "antd";
import TodoList from "./TodoList.jsx";
let ID = 0;
const TodoInput = () => {
  let todoInput = "";
  const [tasklist, settasklist] = useState([]);

  const editTask = (id, value) => {
    settasklist(
      tasklist.map((element) => {
        if (element.id === id) {
          return {
            id: element.id,
            content: value,
            done: element.done
          };
        } else {
          return element;
        }
      })
    );
  };
  const deleteTask = (id) => {
    settasklist(tasklist.filter((element) => element.id !== id));
  };
  const doneTask = (id) => {
    settasklist(
      tasklist.map((element) => {
        if (element.id === id) {
          return {
            id: element.id,
            content: element.content,
            done: !element.done
          };
        } else {
          return element;
        }
      })
    );
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Input
          placeholder="Enter todo list task"
          onChange={(e) => {
            todoInput = e.target.value;
          }}
        />
        <Button
          className="input-button-container"
          type="primary"
          onClick={() => {
            if (todoInput !== "") {
              settasklist([
                ...tasklist,
                { id: ID++, content: todoInput, done: false }
              ]);
            }
          }}
        >
          Enter task
        </Button>
      </div>
      <TodoList
        tasks={tasklist}
        edit={editTask}
        delete={deleteTask}
        done={doneTask}
      />
    </div>
  );
};

export default TodoInput;
