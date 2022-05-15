import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { number } from 'prop-types';

function Clock(props) {
    const {clock} = props;
    const[time , setTime] = useState();
    let timeout;

    const date = () => {
        const t = new Date();
        const h = Number(t.getHours() + Number(clock.UTS));
        t.setHours(h);
        setTime(t.toLocaleTimeString());
    }

    useEffect(() => {
        date()
    }, []);

    useEffect(() => {
    timeout = setTimeout(date, 1000);
    return () => {clearTimeout(timeout)}
    }, [time])
  return (<>
      <h3 className='widgetClockTitle'>{clock.city}</h3>
      <div className='widgetClockTime'>{time}</div>
  </>
    
  )
}

Clock.propTypes = {
    clock: PropTypes.object.isRequired,
}

export default Clock
