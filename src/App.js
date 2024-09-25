import logo from './logo.svg';
import './App.css';
import Header  from './header.jsx'
import babag from './images/babag.jpg'
import 'react-notifications/lib/notifications.css';
import bhaog from './images/bhaog.jpg'
import { useState } from 'react';
import { NotificationManager, NotificationContainer } from 'react-notifications';


function App() {
  let showNotification=()=>{
    // NotificationManager.info("Welcome to Karachi")
    // NotificationManager.success('Success message', 'Title here');
    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  }

// let template='';
//   // let[count,setCount]=useState(1)
//   let[color,setColor]=useState(false)

//   if (color){
//     template=<>
//     <button className='bg-[blue] p-4' onClick={()=>setColor(!color)}>blue</button>
//     <p>red</p>
//     </>
//   }
//   else{
//     template=<button className='bg-[red] p-4' onClick={()=>setColor(!color)}>red</button>
//   }

  // let displayData=()=>{
  // //  setCount(count+1)

  // }
  // let addData=(a,b)=>{
  //   alert(a+b)
  // }
  return (
    <div className="App">
     <NotificationContainer/>
      <button className='btn-notifications' onClick={showNotification}>Save</button>
      {/* {template}
      {/* <div>
      {count}
      </div> */}
      {/* <button className='bg-[red] p-[10px] mr-10' onClick={()=>addData(10,20)}>Add data</button>
      <button className='bg-[red] p-[10px]' onClick={displayData}>save</button>
      <img width={200} src={babag}/>
      <img width={200} src={bhaog}/> */}
      {/* <Header/>
      <h1 className='text-[40px] text-red-900 font-bold'>Welcome to Karachi</h1> */}
    </div>
  );
}

export default App;
