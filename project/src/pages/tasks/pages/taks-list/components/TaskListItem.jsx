import React from "react";
import "./TaskListItem.scss";

export const TaskListItem = ({ data }) => {
  return (
      <div className="task-list-item__wrapper">
        <div className={`task-list-item__priority task-list-item__priority--${data.priority}`}>
          
        </div>
        <div className="task-list-item__content">
          <p className="task-list-item__heading">
            {data.name}
          </p>
          <p className="task-list-item__description">
            {data.description}
          </p>
        </div>
      </div>
  );
}