import './App.css';
import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import Clock from './components/Clock';

function App() {
const [state, setState] = useState({
    city: '',
    UTS: ''
});
const [clock, setClock] = useState([]);
const onChangeHandler = (e) => {
    if(e.target.name === 'widgetInputCity'){
      setState(prevState => ({...prevState, city: e.target.value}))
    }else{ 
      setState(prevState => ({...prevState, UTS: e.target.value}))}
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setClock(prevClock => [...prevClock, {...state, id: nanoid()}]);
     }
  
  const handleRemove = (id) => { 
    setClock(prevClock => prevClock.filter(el => el.id !== id))
  }   
  return (<>
    <div className='widgetBox'>
      <form className='widgetForm' onSubmit={onSubmitHandler}>
        <label for='widgetInputCity' >Город</label>
        <input className='widgetInputCity' type='text' name='widgetInputCity'  required onChange={onChangeHandler}/>
        <label for='widgetInputUTS' >Регион</label>
        <input className='widgetInputUTS' type='number' min='-12' max='12' name='widgetInputUTS' required onChange={onChangeHandler}/>
        <button className='widgetButton'>Отправить</button>
      </form>
    </div>
    <div className='widgetClock'>
      {clock.map(el => <div key={el.id}><Clock clock={el} />
                          <button className='widgetButtonDel' onClick={() => handleRemove(el.id)}>Удалить</button>
                       </div> )}
    </div>
  </>)
}

export default App;
