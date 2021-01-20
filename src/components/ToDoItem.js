import React from "react";
import "./ToDoItem.css";
import { Icon } from 'semantic-ui-react'

const ToDoItem = (props) => {
    const { item, deleteItem, changeItem } = props;

    return (
        <div className="ToDoItem">
            <button className="ToDoItem-Check" onClick={() => changeItem(item.id)}>
                <Icon disabled name='check' />
            </button>
            <p style={item.checked ? {textDecoration: 'line-through'} : null } className="ToDoItem-Text">{item.name}</p>
            <button className="ToDoItem-Delete" onClick={() => deleteItem(item.id)}>
                -
            </button>
        </div>
    );
};

export default ToDoItem;