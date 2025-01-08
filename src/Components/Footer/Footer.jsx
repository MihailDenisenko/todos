/* eslint-disable no-unused-vars */
import React from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskFilter from '../TaskFilter/TaskFilter';

export default function Footer({ newTaskAtHome, timeAtHome, onClickd }) {
  const [elemActive, setElementActive] = React.useState('');

  function newValue(aaa) {
    setElementActive(aaa);
  }

  const newTask = (aaa) => {
    newTaskAtHome(aaa);
  };

  const now = (time) => {
    timeAtHome(time);
  };

  const onClicked = (cli, pushed) => {
    onClickd(cli, pushed);
  };

  return (
    <div>
      <footer className="footer">
        <NewTaskForm newValue={newValue} newTask={newTask} newTime={now} /> {/*keyDown={keyDown}  */}
        <ul className="filters">
          <TaskFilter onClicked={onClicked} />
        </ul>
      </footer>
    </div>
  );
}
