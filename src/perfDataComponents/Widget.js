import Cpu from './Cpu.js';
import Mem from './Mem.js';
import Info from './Info.js';
import './Widget.css'
import socket from '../utilities/socketConnection';
import { useEffect, useState } from 'react';
const Widget = ({data}) => {
    const [isAlive, setIsAlive] = useState(true)
    const {
        macA,
        osType,
        upTime,
        freeMem,
        totalMem,
        usedMem,
        memUsage,
        cpuType,
        numCores,
        cpuSpeed,
        cpuLoad
    } = data;
    
    const cpuData = {
        cpuLoad,
    }
    const memData = {
        freeMem,
        totalMem, 
        usedMem,
        memUsage
    }
    const infoData = {
        macA,
        osType,
        upTime,
        cpuType,
        cpuSpeed,
        numCores
    }
    const notAliveDiv = !isAlive ? <div className='not-active'>Offline</div> : <></>
    useEffect(()=>{
        socket.on('connectedOrNot', ({isAlive, machineMacA})=>{
            // connectedOrNot event does not mean this client has disconnected or  reconnected 
            // it is for one of the nodeClient that is ticking
            // we need a new event for this because that node client stopped ticking
             if(macA === machineMacA){
                setIsAlive(isAlive) // update is alive state
             }
            console.log('data from server: ', data)
        })
    }, [])
    return (
       <div className='widget row justify-content-evenly' >
              
            {notAliveDiv}
               <Cpu data={cpuData} />
                <Mem data={memData} />
                <Info data={infoData} />
       </div>
    );
}

export default Widget;