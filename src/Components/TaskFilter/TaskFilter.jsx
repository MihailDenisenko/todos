import React from 'react';

export default function TaskFilter({ val, typeId, onClicked }) {
  let btnElem;

  const [elemActive, setElementActive] = React.useState(0);

  const a = JSON.parse(sessionStorage.getItem('item'));

  const buttonSetElement = (btn, index) => {
    if (btn === 'Все') {
      btnElem = a.map((abc) => abc);
    }
    // eslint-disable-next-line no-unused-expressions
    else if (btn === 'Aктивные') {
      btnElem = a.filter((abc) => !abc.isCompleted);
    }
    // eslint-disable-next-line no-unused-expressions
    else {
      btnElem = a.filter((abc) => abc.isCompleted);
    }
    onClicked(btnElem, btn);

    setElementActive(index);
  };

  const btnsFotter = ['Все', 'Aктивные', 'Выполненные'];
  const buttons = btnsFotter.map((btn, ind) => {
    return (
      <li key={ind}>
        <button onClick={() => buttonSetElement(btn, ind)} id={ind} className={elemActive === ind ? 'selected' : ''}>
          {btn}
        </button>
      </li>
    );
  });

  return (
    <>
      {buttons}
      {/* <button onClick={() => setElementActive(ind)} id={ind} className={elemActive === ind ? 'selected' : ''}>{btn}</button> */}
      {/*  className={val==='All'?'selected':''*/}
    </>
  );
}
