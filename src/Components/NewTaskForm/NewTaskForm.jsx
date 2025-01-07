/* eslint-disable no-unused-vars */
import React from 'react'
import { format } from 'date-fns';




export default function NewTaskForm({ newValue, newTask, newTime }) {

  const [valConst, setVal] = React.useState('');
  const [valArr, setValArr] = React.useState([]);
  React.useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    valArr.length !== 0 ? console.log(valArr) : '';
  }, [valArr])
  
  const keyDown = (evnt) => {
    
    if (evnt.key === 'Enter') {
      const times = new Date()
      let  valu = evnt.target.value
      fetch("https://676d32bb0e299dd2ddfec4d5.mockapi.io/items", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: `${valu}`,
          Created: times})
      })
        .then((resp) => {
          if (resp.ok){
            
            return resp.json()
          }
        })
        .then(json => {newTask(json)
        }).catch(er => alert(er.name))
      newTime(times)
        evnt.target.value = ''
      setVal(valu)
      // newValue(valConst)

    }
  }
  return (

      <div>
      <input onKeyDown={keyDown} className="new-todo" placeholder="Введите новую задачу" autoFocus />
      </div>
  )
}
