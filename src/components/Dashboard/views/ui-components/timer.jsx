import React, {useState,useEffect} from 'react';
let myInterval = false;

    const Timer = (props) => {
        const {initialMinute ,initialSeconds ,setfinish} = props;
        const [ minutes, setMinutes ] = useState(initialMinute);
        const [seconds, setSeconds ] =  useState(initialSeconds);
        const func = (sec,min)=>{ if(!myInterval)
            myInterval= setInterval(() => {
                // var sec 
                // if(minutes === 0 && seconds === 0){
                //     clearInterval(myInterval)
                // }
                    if (sec > 0) {
                        sec=sec-1
                    }
                    else if (sec=== 0) {
                        if (parseInt(min) === 0) {
                            sec=0
                            min=0
                        } else {
                            min=min-1
                            sec=59
                        }
                    } 
                    setMinutes(min)
                    setSeconds(sec)
                    console.log(minutes,"rahul bhaiya",seconds,"minutes")
                }, 1000)}
        useEffect(()=>{
            console.log(minutes,typeof minutes,"debraj bhaiya",props)
         
            // return ()=> {
            //     clearInterval(myInterval);
            //   };
            console.log(seconds,"use")
            func(seconds,minutes)
            
        },[]);
        
        return (
            <div>
            { minutes === 0 && seconds === 0
                ? setfinish(true)
                : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
            }
            </div>
        )
    }
    
    export default Timer;