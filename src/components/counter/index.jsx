import React, {useState, useEffect} from 'react';
import AutoClick from './AutoClick';

export default function Count(props) {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);



const increment = () => {
    setCounter(counter + step)
        // return nextCounter +1;
}

    const decrement = () =>{
        setCounter(counter - step) 
         //   return prevCounter -1;
        
    };  

    // const clickHandler = () =>{
    //     setCounter(counter = step)
    // };
    const handleStepChange =({target:{value}}) => {
        setStep(Number (value));

    }

    useEffect(() => {
        document.title = `Вы нажали ${counter} раз`;
      });

    // useEffect (() => {
    //    const intervalID = setInterval(increment, 1000);
    //     return()=> {
    //         clearInterval(intervalID)
    //    };
    //     },[increment]);

          useEffect(() => {
              let timeoutID;
               if (counter <= 29) {
                   timeoutID=setTimeout(increment,1000)
               }
               return () => {
                   clearTimeout(timeoutID)
               }
              });
             
    return (
        <div>
           <div>Counter:{counter}</div> 
          <div>  <input type="range" 
            name="step"
            value={step}
            min="1"
            max="10"
            onChange={handleStepChange}
             /> 
             </div>
             <div>
               <button onClick={decrement}>Prev</button>
               <button onClick={increment}>Next</button>
               </div>
           
        </div>
    );
    }

