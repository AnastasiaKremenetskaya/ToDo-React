import React from "react";
import "./ToDoItem.css";
import { Icon } from 'semantic-ui-react'

const ToDoItem = (props) => {
    const { item, deleteItem, changeItem } = props;

    return (
        <div className="ToDoItem">
            <button style={item.checked ? {cursor: 'not-allowed'} : null } className="ToDoItem-Check" onClick={() => changeItem(item.id)}>
                <Icon disabled={item.checked} name='check circle outline' />
            </button>
            <p style={item.checked ? {textDecoration: 'line-through'} : null } className="ToDoItem-Text">{item.name}</p>
            <button className="ToDoItem-Delete" onClick={() => deleteItem(item.id)}>
                <Icon name='trash alternate outline' />
            </button>
        </div>
    );
};

export default ToDoItem;