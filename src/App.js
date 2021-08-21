import './App.css';
import { useState } from 'react';

function App() {
  // const [task,setTask]=useState([
  //   {
  //     id:1,
  //     taskName:"go to office",
  //     isDone:false
  //   },
  //   {
  //     id:2,
  //     taskName:"have lunch",
  //     isDone:false
  //   }])
  //   let changeTask = (id)=>{
  //     let taskIndex = task.findIndex(obj=>obj.id===id);
  //     task[taskIndex].isDone=!task[taskIndex].isDone;
  //     setTask([...task])
  //   }

  const [count1,setCount1]=useState(0);
  const [count2,setCount2]=useState(0);
  const [count3,setCount3]=useState(0);
  let increment1 = ()=>{
    setCount1(count1+1)
  }
  let increment2 = ()=>{
    setCount2(count2+1)
  }
  let increment3 = ()=>{
    setCount3(count3+1)
  }
  let reset =()=>{
    setCount1(0);setCount2(0);setCount3(0)
  }
  return (
    <div class="dis1"><button class="reset" onClick={reset}>Reset</button>
      <div class="dis">
      <h1 class="score">{count1}<br/><button class="button1" onClick={increment1}>Increase</button></h1>
      <h1 class="score">{count2}<br/><button class="button2" onClick={increment2}>Increase</button></h1>
      <h1 class="score">{count3}<br/><button class="button3" onClick={increment3}>Increase</button></h1>
    </div></div>
  );
}

export default App;
