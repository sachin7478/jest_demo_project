import React, {useState, useMemo} from "react"


const UseMemoExapmple = () => {
  let [num, setNum] = useState(0);
  let [counter, setCounter] = useState(0);
  const calc = (num) =>{
    console.log('--- Squaring ---');
    return Math.pow(num,2);
  }

  const squareNum = useMemo(()=> calc(num),[num])
  // const squareNum = calc(num); // normal function call
  
  return(<>
    <div className="card">
        <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          UseMemo Example
        </h5>
        <div className="flex justify-center flex-row font-semibold">
          <div className="text-green-600">Counter {counter}</div>
          <div style={{borderLeft: '2px solid green '}} className="text-violet-700">Square Output {squareNum}</div>
        </div>
        <div className="mb-5 text-base text-gray-500  dark:text-gray-400 flex justify-center space-x-4 mt-5">
          <input className="w-1/3" type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
          <button onClick={() => {setCounter(++counter);}}>Count ++</button>
        </div>
    </div>
  </>)
}
export default UseMemoExapmple