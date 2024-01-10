import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function SubApp() {
  const [data,setData] = useState("Sachin");
  return(<>
        <label htmlFor="user_name">USER NAME</label>
        <input 
        type="text"
        value={data} 
        onChange={(e)=>setData(e.target.value)}
        id="user_name" 
        name="user_name" 
        title="input name" 
        placeholder="Enter Name"/>
        <br />
        <button onClick={()=>setData(data)}>set heading</button>
    
        <h1>{data}</h1>
  </>) 
}

function App() {
  const [data,setData] = useState("Sachin");
  const [heading, setHeading] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <p>      Learn React      </p>
        
        <div data-testid="firstDiv">
          <label htmlFor="user_name">USER NAME</label>
          <input 
          type="text"
          value={data} 
          onChange={(e)=>setData(e.target.value)}
          id="user_name" 
          name="user_name" 
          title="input name" 
          placeholder="Enter Name"/>
          <br />
          <button onClick={()=>setHeading(data)}>set heading</button>
      
          <h1>{heading}</h1>
        </div>

        <div role="dummy" data-testid="dummy_test_id">Dummy Test</div>  {/*Creating custom role*/}

        <article>Strong 1 | </article>
        <article>Strong 2</article>
        <select>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </header>
    </div>
  );
}

export default App;
