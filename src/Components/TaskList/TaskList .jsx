/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import Task from '../Task/Task';
import Sceleton from '../Sceleton/Sceleton';
import { AppContext } from '../../App';

let donedTask = 0;

export default function TaskList({ newTask, allTasks, donedTasks, newTaskAdd, tasksOf, isBtnTk }) {
  
  const { itemsAll, setItemsAll, items, setItems, filterBtn } = React.useContext(AppContext);
  const [useItem, setUseItem] = React.useState('');
  // eslint-disable-next-line no-unused-vars
  const [task, setTask] = React.useState([]);
  const [taskAdd, setTaskAdd] = React.useState([newTaskAdd]);
  // const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [isBtnTask, seIsBtnTask] = React.useState([]);

  const [newTaskF, setnewTaskF] = React.useState([]);

  const newTaskIn = (newT) => {
    // setnewTaskF(newT);
    // let newTaskAll = itemsAll;
  };

  React.useEffect(() => {
    fetch(
      'https://676d32bb0e299dd2ddfec4d5.mockapi.io/items/',
      //  {
      // method: "POST",
      // headers: { 'content-type': 'application/json' },
      // body: JSON.stringify({name: 'Hello World'})
      // }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        setItems(json)
        setItemsAll(json)
        sessionStorage.setItem('item', JSON.stringify(json));
        sessionStorage.setItem('items', JSON.stringify(items));
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);

        json.map((it) => {
          // eslint-disable-next-line no-unused-expressions
          it.isCompleted === true ? (donedTask += 1) : '';
        });
        donedTasks(donedTask);
      })
      .catch((er) => console.log(er));
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    items.length !== 0 ? tasksOf(items) : '';
    sessionStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const doneTask = (task, idb) => {
    task.isCompleted ? (donedTask += 1) : (donedTask -= 1);
    donedTasks(donedTask);
  };

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    newTaskF.length !== 0 ? setItems([...items, newTaskF]) : '';
    sessionStorage.setItem('item', JSON.stringify(items), newTaskF);
  }, [newTaskF]);

  // eslint-disable-next-line no-unused-expressions
  items.length !== 0 ? allTasks(items) : '';

  function deleteElement(pos) {
    // console.log(typeof pos)
    fetch(`https://676d32bb0e299dd2ddfec4d5.mockapi.io/items/${pos}`, {
      method: 'DELETE',
    })
      .then((resp) => {
        if (resp.ok) {
          let a = items.filter((item) => item.id !== pos);
          setItems(a);
          tasksOf(items);
          let newItemsAll = itemsAll.filter(item => item.id!==pos)
          setItemsAll(newItemsAll)
          return resp.json();
        }
      })
      .then((json) => {
        // console.log(json)
      });
  }

  

  React.useEffect(() => {
    if (isBtnTask.length !== 0) {
      setItems([...isBtnTask]);
    }
  }, [isBtnTask]);

  const isBtnTasked = (cli) => {
    seIsBtnTask(cli);
  };
  // eslint-disable-next-line no-unused-expressions

  const elements = items.map((item) => {
    const { id, name, isCompleted, isDiscription, Created, minutes, seconds } = item;

    return (
      <li key={id} className={`list-group-item ${useItem}`}>
        <Task
          label={name}
          doneTaski={doneTask}
          id={id}
          onDeleted={() => {
            deleteElement(id);
          }}
          isCompleted={isCompleted}
          isDiscription={isDiscription}
          newTaskOutput={newTask}
          newTaskInput={newTaskIn}
          Created={Created}
          isBtnTk={isBtnTk}
          btnTasked={isBtnTasked}
          minutes={minutes}
          seconds={seconds}
        />
      </li>
    );

  });

  return (
    <ul className="list-group todo-list">
      {isLoading
        ? [...new Array(4)].map((_, ind) => {
            return <Sceleton key={ind} />;
          })
        : elements}
    </ul>
  );
}
