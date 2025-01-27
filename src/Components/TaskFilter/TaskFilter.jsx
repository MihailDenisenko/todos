/* eslint-disable no-unused-vars */
import React from 'react';
import { AppContext } from '../../App';

export default function TaskFilter({ val, typeId, onClicked }) {
  const { filterBtn, setFilterBtn, itemsAll, setItems, items } = React.useContext(AppContext);
  let btnElem;

  const [elemActive, setElementActive] = React.useState(0);

  // const a = JSON.parse(sessionStorage.getItem('item'));

  const buttonSetElement = (btn, index) => {
    if (btn === 'Все') {
      // console.log(itemsAll)
      let newItems = itemsAll.map((item) => item);
      setItems(newItems);
    }
    // eslint-disable-next-line no-unused-expressions
    if (btn === 'Aктивные') {
      // console.log(itemsAll)
      let newItems = itemsAll.filter((item) => !item.isCompleted);
      setItems(newItems);
    }
    // eslint-disable-next-line no-unused-expressions
    else if (btn === 'Выполненные') {
      // console.log(itemsAll)
      let newItems = itemsAll.filter((item) => item.isCompleted);
      setItems(newItems);
    }
  };

  // const newBtn = (btn) => {

  //   let newItems = itemsAll.filter(item => item.isCompleted)
  //   setItems(newItems)
  // }

  const btnsFotter = ['Все', 'Aктивные', 'Выполненные'];
  const buttons = btnsFotter.map((btn, ind) => {
    return (
      <li key={ind}>
        <button
          onClick={() => {
            setFilterBtn(btn);
            buttonSetElement(btn, ind)
            setElementActive(ind);
            // console.log(itemsAll)
          }}
          id={ind}
          className={elemActive === ind ? 'selected' : ''}
        >
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
