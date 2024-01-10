import { useState } from "react"

const AsyncApp = () =>{
  const [data, setData] = useState(false);

  setTimeout(()=>{setData(true)},5000)
  return(<>
  <h1>Find</h1>
  {data?<h2>Data Found</h2>:<h2>No Data found</h2>}
  </>)
}
export default AsyncApp;