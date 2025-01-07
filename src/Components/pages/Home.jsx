/* eslint-disable no-unused-vars */
import React from 'react'

import TaskList from '../TaskList/TaskList ';
import Footer from '../Footer';


export default function Home() {
  const [newTaskOfTaskList, setNewTask] = React.useState('');
  const [allTasks, setTasks] = React.useState(0)
  const [doneTasks, setDoneTasks] = React.useState([])
  const [Time, setTime] = React.useState('')
  const [don, setDon] = React.useState(0)
  const [isBTntsk, setIsBtnTsk] = React.useState([])
  let isDone = ''

  if ( doneTasks === 1) isDone = "но"
  else if (doneTasks === 0) isDone = "ных";
  else isDone = "ны"

  const newTaskHome = (aaa) => {
    setNewTask(aaa)
  }  

  const donedTasks = (doneTasks) => {
    setDoneTasks(doneTasks)
  }

  const allTask = (task) => {
    // eslint-disable-next-line no-unused-expressions
  }
  const timeHome = (time) => {
    // console.log(time, 'at home')
    setTime(time)
  }

  const tasksOf = (tas) => {
    let doned = 0
    // eslint-disable-next-line array-callback-return
    tas.map((task, i) => {
      const { isCompleted } = task
      // eslint-disable-next-line no-unused-expressions
      isCompleted === true ? doned +=1 : '';
      setTasks(i+1)
    })
    
    setDon(doned)
  }

  const onClicked = (cli, pushed) => {
    setIsBtnTsk(cli)
  }
 
    return (
      <>
        <span className="todo-count">Всего {allTasks} дел, {doneTasks} выполнен{ isDone }</span>
      
        <div>
          <Footer newTaskAtHome={newTaskHome} timeAtHome={timeHome } onClickd={onClicked} />
          <TaskList onDeleted={(aa) => { console.log(aa) }} newTask={newTaskOfTaskList} allTasks={allTask}
            donedTasks={donedTasks} newTaskAdd={allTasks} tasksOf={tasksOf} isBtnTk={isBTntsk }  />
        </div>
    </>
  )
}
