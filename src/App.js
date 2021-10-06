import { useState } from 'react';
import './App.css';
import Remote from './components/Remote';
import Video from './components/Video';

function App() {
  const[off,setoff]=useState(false);
  const[count,setcount]=useState(90);
  const[volumes,setvolume]=useState(0.500);
  const[videos,setvideos]=useState([
    {
    id:0,
    url:'https://youtu.be/6pxRHBw-k8M'
  },
  {
    id:1,
    url:'https://youtu.be/M-P4QBt-FWw'
  },
  {
    id:2,
    url:'https://youtu.be/VwBGvYpFStE'
  },
  {
    id:3,
    url:'https://youtu.be/OULYx8QXObw'
  }, {
    id:4,
    url:'https://youtu.be/jqlxti9oYzw'
  },{
    id:5,
    url:'https://youtu.be/DGQwd1_dpuc'
  },{
    id:6,
    url:'https://youtu.be/htqXL94Rza4'
  },{
    id:7,
    url:'https://youtu.be/TcMBFSGVi1c'
  }
]);
const[index,setindex]=useState(0);
function haddleup() {
  setindex(index+1)
}
  function handledown() {
    setindex(index-1)
  }
  function handleswitch() {
    setoff(!off);
  }
  function handlesleep() {
    alert("The screen will be automatically off in 5 seconds");
    setTimeout(()=>{
      setoff(false);
    },5000)
  }
  function handlebright() {
    setcount(count+20)
  }
  function handledecrease() {
    setcount(count-20)
  }
  function handlevolume() {
    setvolume(volumes+0.100);
  }
  function handlevolumedecrease() {
    setvolume(volumes-0.100);
  }
  return (
    <div className="App">
      <div className="row">
      <div className="col-md-4 col-sm-6">
      <Remote handleswitch={handleswitch} 
      handlesleep={ handlesleep } 
      handlebright={handlebright} 
      handledecrease={handledecrease} 
      handlevolume={handlevolume}
      handlevolumedecrease={handlevolumedecrease}
      haddleup={haddleup}
      handledown={handledown}></Remote>
      </div>
      <div style={{filter:`brightness(${count}%)`}} className="col-md-8 col-sm-6">
        { off && <Video videos={videos[index].url} volumes={volumes}></Video> }
        { !off && <div className="text-center"><h1 style={{color:"black"}}>Turned Off..!</h1></div> }
      </div>  
     
      
      </div>
    </div>
  );
}

export default App;