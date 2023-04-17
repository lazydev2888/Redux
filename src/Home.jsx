import React from 'react'
import { useDispatch } from 'react-redux';

const Home = () => {
    
     const dispatch = useDispatch();
    

        const addBtn = () => {
            dispatch({type: 'Increament'});
        };
        const subBtn = () => {
            dispatch({type: 'Decreament'});
        };
        const addBtn25 = () => {
            dispatch({type: 'IncrementByValue',
            payload: 25,
        });
        };



  return (
    <div>
        
        <button onClick={addBtn} >Increament</button>
        <button onClick={addBtn25} >Increament By 25</button>
        <button onClick={subBtn} >Decreament</button>
    </div>
  )
}

export default Home