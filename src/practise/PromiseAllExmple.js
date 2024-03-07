import { useState, useEffect } from "react";
import { lastNameAPI } from "./lastNameApi";

const userNames = ["gbhavalkar", "tchoy", "ndhangar"];


const PromiseAllExample = () =>{
    let [loaded, setLoaded] = useState(false)
    let [allData, setData] = useState([]);

    useEffect(()=> {
        async function fetchData () {
            let t = [];
           userNames.map((item)=>{
                t = [...t, lastNameAPI(item)]
            })
            await Promise.all( t ).then(res =>{
                setData(res)
                setLoaded(true)
            })
        }
        fetchData();
    }
    ,[])
    return(<>
    <div className="card">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Promise All Example
          </h5>

          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {loaded &&
                allData.map((item,i) => <RowComp item={item} key={i}/>)
                    }
                </tbody>
                
            </table>
          </div>
        </div>
    </>)
}
export default PromiseAllExample;

const RowComp = ({item}) => {
    const {first_name, last_name} = item
    return(<tr><td>{`${first_name}  ${last_name}`}</td></tr>)
}

