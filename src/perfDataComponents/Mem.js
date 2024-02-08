import {useRef} from 'react'
import drawCircle from "../utilities/canvasLoadAnimation";

const Mem = ({data}) => {
    const canvasEl = useRef()
  

    const totalMemInGB = Math.floor(data.totalMem/1073741824 * 100) / 100
    const freeMemInGB = Math.floor(data.freeMem/1073741824 * 100) / 100
    drawCircle(canvasEl.current,data.usedMem * 100)
    return (
        <div className="mem col-3" >
            <h3>Memory</h3>
            <div className='canvas-wrapper' >
                <canvas ref={canvasEl} className="canvas" id="mem" width="200" height="200"></canvas>
                <div className="mem-text" >{data.memUsage * 100}%</div>
            </div>
            <div>Total Memory: {totalMemInGB}gb</div>
            <div>Free Memory: {freeMemInGB}gb</div>
               
         

        </div>
    );
}

export default Mem;