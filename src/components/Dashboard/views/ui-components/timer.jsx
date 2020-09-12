import React, {useState,useEffect} from 'react';
let myInterval = false;

    const Timer = (props) => {
        const {initialMinute ,initialSeconds ,finish,setfinish} = props;
        const [ minutes, setMinutes ] = useState(initialMinute);
        const [seconds, setSeconds ] =  useState(initialSeconds);
        useEffect(() => {
            if(finish){
                localStorage.removeItem("sec")
                localStorage.removeItem("min")
            }
            else
            {if(typeof(window)!== undefined){
                localStorage.setItem("sec",0)
                localStorage.setItem("min",parseInt(initialMinute))
                setSeconds(0)
                setMinutes(parseInt(initialMinute))
            }}
        }, [])
        const func = (sec,min)=>{ if(!myInterval)
            myInterval= setInterval( async () => {
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
                    
                    if(typeof(window)!== undefined && localStorage.getItem("sec")){
                        console.log("func")
                        localStorage.setItem("sec",sec)
                        localStorage.setItem("min",min)
                        const news = await Promise.resolve(parseInt(localStorage.getItem("sec"))) 
                        const newm = await Promise.resolve(parseInt(localStorage.getItem("min"))) 
                        const p1 = await Promise.resolve(setMinutes(newm))
                        const p2 = await Promise.resolve(setSeconds(news))
                    }
                    console.log(minutes,"rahul bhaiya",seconds,"minutes")
                }, 1000)}
        const call = async ()=>{
                        console.log("call")
            const news = await Promise.resolve(parseInt(localStorage.getItem("sec"))) 
            const newm = await Promise.resolve(parseInt(localStorage.getItem("min"))) 
            const p1 = await Promise.resolve(setMinutes(newm))
            const p2 = await Promise.resolve(setSeconds(news))
            // const newm = await localStorage.getItem("min")
            console.log("Anshika",news,newm)
            console.log("Anshika2",news,newm)
            
            func(news,newm)
        }
        useEffect(()=>{
            console.log(minutes,typeof minutes,"debraj bhaiya",props)
            
            // return ()=> {
            //     clearInterval(myInterval);
            //   };
            
            console.log(seconds,"use")
            // func(seconds,minutes)
            call()
            
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