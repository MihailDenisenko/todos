import React from 'react';
import { Routes, Route } from 'react-router';

import './styles/style.scss';
import Header from './Components/Header/Header';
import Home from './Components/pages/Home';
import NotFound from './Components/pages/NotFound';

export const AppContext = React.createContext();


export default function App() {
  const [i, setI] = React.useState('hohoho')
  return (
    <div>
      <AppContext.Provider value={{ i, setI }}>
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

//         <Route path="/Aктивные" element={<HomeActive />} />
//         <Route path="/Выполненные" element={<HomeDone />} />

// {
//   //  <section className="todoapp">
//   //   <header className=" ">
//   //     <h1>todossss</h1>
//   //     <input className="new-todo" placeholder="What needs to be done?" autoFocus />
//   //   </header>
//   //   <section className="main">
//   //     <ul className="todo-list">
//   //       <li className="completed">
//   //         <div className="view">
//   //           <input className="toggle" type="checkbox" />
//   //           <label>
//   //             <span className="description">Completed task</span>
//   //             <span className="created">created 17 seconds ago</span>
//   //           </label>
//   //           <button className="icon icon-edit"></button>
//   //           <button className="icon icon-destroy"></button>
//   //         </div>
//   //       </li>
//   //       <li className="editing">
//   //         <div className="view">
//   //           <input className="toggle" type="checkbox" />
//   //           <label>
//   //             <span className="desription">Editing task</span>
//   //             <span className="created">created 5 minutes ago</span>
//   //           </label>
//   //           <button className="icon icon-edit"></button>
//   //           <button className="icon icon-destroy"></button>
//   //         </div>
//   //         <input type="text" className="edit" value="Editing task" />
//   //       </li>
//   //       <li>
//   //         <div className="view">
//   //           <input className="toggle" type="checkbox" />
//   //           <label>
//   //             <span className="description">Active task</span>
//   //             <span className="created">created 5 minutes ago</span>
//   //           </label>
//   //           <button className="icon icon-edit"></button>
//   //           <button className="icon icon-destroy"></button>
//   //         </div>
//   //       </li>
//   //     </ul>
//   //     <footer className="footer">
//   //       <span className="todo-count">1 items left</span>
//   //       <ul className="filters">
//   //         <li>
//   //           <button className="selected">All</button>
//   //         </li>
//   //         <li>
//   //           <button>Active</button>
//   //         </li>
//   //         <li>
//   //           <button>Completed</button>
//   //         </li>
//   //       </ul>
//   //       <button className="clear-completed">Clear completed</button>
//   //     </footer>
//   //   </section>
//   // </section>
// }
