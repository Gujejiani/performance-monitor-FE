
import './App.css';
import Widget from './perfDataComponents/Widget';
import socket from './utilities/socketConnection'
import { useEffect,  useState } from 'react';
function App() {
 


  const [performanceData, setPerformanceData] = useState({})

  const perfMachineData ={}
    // useEffect(()=>{

    
    //   console.log('hello')
    //   socket.on('perfData', (data)=>{
    //     // console.log(data)
    //     const copyPerfData = {...performanceData};
    //     // performanceData is not an array its an {}
    //     // we need to use the macA of the object, to identify which computer
    //     copyPerfData[data.macA] = data;
    //     setPerformanceData(copyPerfData)
    //   })
    // }, [])
    useEffect(()=>{
    socket.on('perfData', (data)=>{
        // console.log(data)
        perfMachineData[data.macA] = data;
        // const copyPerfData = {...performanceData};
        // performanceData is not an array its an {}
        // we need to use the macA of the object, to identify which computer
        // copyPerfData[data.macA] = data;
        // setPerformanceData(copyPerfData)
      })
   
    }, [])
    useEffect(()=>{
      setInterval(()=>{
        console.log('hello', perfMachineData)
        const copyPerfData = {...perfMachineData};
        setPerformanceData(copyPerfData)
      }, 1000)
    }, [])

    const widgets = Object.values(performanceData).map(d=> <Widget data={d} key={d.macA} />)
  return (
    <div className="container">
     {
        widgets
     }
    </div>
  );
}

export default App;
