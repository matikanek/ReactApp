import Container from '@material-ui/core/Container';
import React from "react";
import { taskMock } from '../TaskMock';
import "./TaskList.scss";
import {TaskListItem} from "../components/TaskListItem";

export const TaskList = () => {
  return (
    <Container maxWidth="lg">
      <div className="task-list__wrapper">
        {taskMock.map((task, index) => {
          return (
            <div className="task-list__item">
              <TaskListItem key={index} data={task} />
            </div>
          );
        })}
      </div>
    </Container>
  );
}