import React, {useState, useEffect} from 'react';

export default function Count(props) {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);



const increment = () => {
    setCounter(counter + step)
        // return nextCounter +1;
}

    const decrement = () =>{
        setCounter((prevCounter)=> {
            return prevCounter -1;
        });
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

    useEffect (() => {
        const intervalID = setInterval(increment, 1000);
        return()=> {
            clearInterval(intervalID)
        };
        });

        // useEffect(() => {
        //     let timeoutID;
        //      if (counter <= 0) {
        //          timeoutID=setTimeout(increment,30000)
        //      }
        //      return () => {
        //          clearTimeout(timeoutID)
        //      }
        //     });
        

   
        
    
    return (
        <div>
           <div>Counter:{counter}</div> 
            <input type="range" 
            name="step"
            value={step}
            min="1"
            max="10"
            onChange={handleStepChange}
             />
             <div>
               <button onClick={decrement}>Prev</button>
               <button onClick={increment}>Next</button>
               </div>
           
        </div>
    );
    }

