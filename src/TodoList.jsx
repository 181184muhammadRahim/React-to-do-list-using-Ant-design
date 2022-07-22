import { List, Divider, Typography, Button } from "antd";
import React from "react";
import { useState } from "react";
const { Paragraph } = Typography;
const TodoList = (props) => {
  const toggledoneButton = (val) => {
    if (val) {
      return {
        marginLeft: "10px",
        backgroundColor: "red"
      };
    } else {
      return {
        marginLeft: "10px"
      };
    }
  };
  return (
    <div key={props.tasks}>
      <Divider orientation="left">Task List</Divider>
      <List
        header={<div>List of Tasks</div>}
        footer={<div>Task list ended</div>}
        bordered
        dataSource={props.tasks}
        renderItem={(item) => (
          <List.Item>
            <div>
              <Paragraph
                editable={{
                  tooltip: "click to edit text",
                  onChange: (e) => {
                    props.edit(item.id, e);
                  },
                  triggerType: "text"
                }}
              >
                {item.content}
              </Paragraph>
              <Button
                type="primary"
                onClick={() => {
                  props.delete(item.id);
                }}
              >
                Delete
              </Button>
              <Button
                style={toggledoneButton(item.done)}
                type="primary"
                onClick={() => {
                  props.done(item.id);
                }}
              >
                {item.done === true ? "Undone" : "Done"}
              </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
export default TodoList;
