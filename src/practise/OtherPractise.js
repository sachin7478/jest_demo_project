import React, { useRef, useState } from "react";
import UseMemoExapmple from './UseMemoExapmple';
import PromiseAllExample from './PromiseAllExmple'
import StartStopExample from "./StartStopExample";
const OtherPractise = () => {
  const [res, setRes] = useState({});
  const [txt, setTxt] = useState('');
  const [tcount, setTcount] = useState(0);
  const [stat_promise, setPromisState] = useState('');
  const refDiv = useRef();

  function bringApi(user = 'sachin7478') {

    if(!user?.target?.value.length) {
      setRes({})
      return
    }
    
    fetch(`http://api.github.com/users/${user?.target?.value}`)
      .then((data) => data.json())
      .then((res) => {
        setRes(res);
      })

    // if(!res)
    // fetch('https://reqres.in/api/users?page=2')
    // .then(data=>data.json())
    // .then(res=> console.log(res))
  }

  function mydebounce (fn,t) {
    let timer;
    
    return function(...args) {
      setTxt(args[0].target.value)
      args[0].stopPropagation();
      
      clearTimeout(timer);
      timer = setTimeout(()=>{
        fn.apply(this, args)
      }, t)
    }
  }
  let boolthrottle = true;
  const tryThrottle = () => {
    if(boolthrottle) {
      boolthrottle = false;
      setTimeout(()=>{
        setTcount((prev)=>++prev)
        boolthrottle = true;
      }, 1500)
    }
  }
  const tryPromise = (type='') => {
    setPromisState('');
    const myPromise = new Promise((resolve, reject)=>{
      if(type === 'reject') {
        setTimeout(()=>{reject('Promis is rejected')},2000)  
      }
      setTimeout(()=>{resolve('Promis is resolved')},2000)

    })
    const p1 = myPromise;
    p1.then((data) => {
      setPromisState(data);
    }).catch(err => {
      setPromisState(err);
      throw new Error(err);
    })
  }
  let refCount =  0;
  const refExample = () => {
    refDiv.current.style.color = 'red';
    const span = document.createElement('span');
    
    setTimeout(()=>{
      span.innerText = refCount++;
      span.className = 'px-1 text-green-500 font-bold'
      refDiv.current.append(span)
    }, 1000)
    console.log()
  }
  return (
    <>
      {/* Row 1 */}
      <div className="flex flex-row justify-center">
    
        <div className="card">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Api call with debounce
          </h5>
          <div className="font-semibold text-xl text-orange-600">
            User: <span className="text-amber-700">{res?.name || ''}</span>
          </div>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <input type="text" value={txt} onChange={mydebounce(bringApi,1500)}></input> 
          </div>
          
        </div>

        <div className="card">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Throttle
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Count : <span className="text-violet-600">{tcount}</span>
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <button onClick={tryThrottle}>Multiple click</button>
          </div>
        </div>

        <div className="card">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Promise after few seconds
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            <span className="font-semibold text-violet-700">{stat_promise}</span>
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <button onClick={tryPromise}>Resolve Promise</button>
            <button onClick={()=>{tryPromise('reject')}}>Reject Promise</button>
          </div>
        </div>

        <div className="card">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Useref example
          </h5>
          <div ref={refDiv}>
            <p>Change colore & Appending Child</p>
          </div>

          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <button onClick={refExample}>UseRef Example</button>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-row justify-center">
        <div></div>
        <PromiseAllExample />
        <UseMemoExapmple />
        <StartStopExample />
        
      </div>
    </>
  );
};
export default OtherPractise;
