import React , {useState, useEffect} from "react";
const StartStopExample = () =>{
    let [count, setCount] = useState(0)
    let [timerState, setTimerState] = useState(false)
    let [timer, setTimer] = useState(null)
    async function changeState () {
        setTimerState(prev => !prev);
    }
    useEffect(() =>{
        if(timerState) {
            const timer = setInterval(function(e){
                setCount(count++)
            }, 200)
            setTimer(timer)
        } else {
            clearInterval(timer);
            setTimer(null)
        }
    }, [timerState])

    return(<>
        <div className="card">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Start - Stop timer with resume count
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            <span className="font-semibold text-violet-700">{count}</span>
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <button onClick={changeState}>{timerState ? 'Stop' : 'Start'}</button>
          </div>
        </div>
    </>)
}
export default StartStopExample;