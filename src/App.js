/* eslint-disable no-unused-expressions */
import React from 'react';
import { Routes, Route } from 'react-router';

import './styles/style.scss';
import Header from './Components/Header/Header';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';

export const AppContext = React.createContext();

export default function App() {
  const [i, setI] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [filterBtn, setFilterBtn] = React.useState('')
  const [itemsAll, setItemsAll] = React.useState([]);
   const [minutes, setMinutes] = React.useState(12);
   const [seconds, setSeconds] = React.useState(25);
    const [inputVal, setInputVal] = React.useState('')
  
  // itemsAll.length!==0?console.log(itemsAll):''
  
  return (
    <div>
      <AppContext.Provider
        value={{
          i,
          setI,
          items,
          setItems,
          itemsAll,
          setItemsAll,
          filterBtn,
          setFilterBtn,
          minutes,
          setMinutes,
          seconds,
          setSeconds,
          inputVal,
          setInputVal,
        }}
      >
        <Header />

        {/* <Footer /> */}

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <NotFound /> */}
        {/* <Home /> */}
      </AppContext.Provider>
    </div>
  );
}
