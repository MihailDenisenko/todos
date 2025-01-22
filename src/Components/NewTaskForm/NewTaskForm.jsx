/* eslint-disable no-unused-vars */
import React from 'react';
import { format } from 'date-fns';
import { AppContext } from '../../App';
export default function NewTaskForm({ newValue, newTask, newTime }) {
  

  const {inputVal, setInputVal} = React.useContext(AppContext)
  const [valArr, setValArr] = React.useState([]);


  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    valArr.length !== 0 ? console.log(valArr) : '';
  }, [valArr]);

  const keyDown = (evnt) => {
    if (evnt.key === 'Enter') {
      const times = new Date();
      
      fetch('https://676d32bb0e299dd2ddfec4d5.mockapi.io/items', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: `${inputVal}`,
          minutes: 10,
          seconds: 59,
          Created: times,
        }),
      })
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
        })
        .then((json) => {
          newTask(json);
        })
        .catch((er) => alert(er.name));
      newTime(times);
      setInputVal('')
      // newValue(valConst)
    }
  };
  return (
    <div>
      <input onKeyDown={keyDown} className="new-todo" placeholder="Введите новую задачу" value={inputVal}
        onChange={(e) => setInputVal(e.target.value)} autoFocus />
    </div>
  );
}
