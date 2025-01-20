/* eslint-disable no-unused-vars */
import React from 'react';
import { formatDistance, toDate, format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { AppContext } from '../../App';

let spanClass = '';
let buttonClass = '';

export default function Task({
  label,
  onDeleted,
  isCompleted,
  isDiscription,
  id,
  doneTaski,
  newTaskOutput,
  newTaskInput,
  Created,
  isBtnTk,
  btnTasked,
}) {

  const [timeNow, setTimeNow] = React.useState('');

  const { i, setI } = React.useContext(AppContext);
 
  const time = setInterval(() => {
    setI(format(new Date(), 'h:m:s'));
  }, 1000)
  

  const [checked, setChecked] = React.useState(isCompleted);
  const [importance, setImportance] = React.useState(isDiscription);
  
  const [a, setA] = React.useState(17);
  const [abc, setabc] = React.useState('');
  // const [classIcon, setclassIcon] = React.useState("");
  const [classIconComplet, setClassIconComplet] = React.useState('');
  
  // eslint-disable-next-line no-unused-expressions
  isBtnTk.length === 0 ? console.log('isBtnTk') : btnTasked(isBtnTk);

  //  Функция на чекбокс
  function che() {
    let sessi = JSON.parse(sessionStorage.getItem('items'));
    fetch(`https://676d32bb0e299dd2ddfec4d5.mockapi.io/items/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ isCompleted: !checked }),
    })
      .then((resp) => {
        if (resp.ok) {
          // eslint-disable-next-line no-unused-expressions
          sessi = sessi.map((ses) => {
            if (ses.id === id) {
              ses.isCompleted = !ses.isCompleted;
            }
            return ses;
          });
          console.log(sessi);
          sessionStorage.setItem('items', JSON.stringify(sessi));
          sessionStorage.setItem('item', JSON.stringify(sessi));

          return resp.json();
        }
      })
      .then((json) => {
        doneTaski(json, id);
      })
      .catch((er) => console.dir(er));

    setChecked(!checked);
    if (!importance && !checked) {
      // !checked ? setabc(" completedActive") : setabc(" Active");
    } else {
      !checked ? setClassIconComplet(' editActiveComplet') : setClassIconComplet(' ');
      setChecked(!checked);

      !checked ? setabc(' completedActive') : setabc(' ');
    }
  }

  //  Функция на важность дела
  function editing(eve) {
    if (checked) {
    } else {
      // console.log(checked)
      setImportance(!importance);
      fetch(`https://676d32bb0e299dd2ddfec4d5.mockapi.io/items/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ isDiscription: !importance }),
      })
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
        })
        .then((json) => {
          console.log(json.isDiscription, 'isDiscr');
        })
        .catch((er) => console.dir(er));
    }
  }

  // eslint-disable-next-line no-unused-expressions
  newTaskOutput !== '' ? newTaskInput(newTaskOutput) : '';

  const dat = toDate(Date.parse(Created));

  const formatDate = formatDistance(dat, new Date(), { locale: ru });

  if (checked && importance) {
    buttonClass = ' editActiveComplet';
    spanClass = ' completedActive';
  } else if (importance) {
    spanClass = ' Active';
    buttonClass = 'editActive';
  } else if (checked) {
    spanClass = 'completed';
    buttonClass = '';
  } else {
    spanClass = ' ';
    buttonClass = ' ';
  }


  return (
    <div className="view">
      <input className={!checked ? 'toggle ' : 'toggle completed'} type="checkbox" onChange={che} checked={checked} />
      <label>
        <span className={`description ${spanClass}`}>{`${label} ${i}`}</span>
        {/* <span className={checked ? "description completed" : "description" + abc}>{label}</span> */}
        <span className="created  description">Создано {formatDate} </span>
      </label>
      {/* <button
        className={isDiscription && checked === true ? `icon icon-edit editActive editActiveComplet` : `icon icon-edit ${classIcon} ${classIconComplet}`}
        onClick={editing}
      ></button> */}

      <button className={`icon icon-edit ${buttonClass}`} onClick={editing}></button>

      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </div>
  );
}
