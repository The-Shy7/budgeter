import React, { Component } from 'react';
import './App.css';
import { MdPictureInPicture, MdAssessment } from "react-icons/md";

function App() {
  return (
    <div className="App">
        <div className="white-bar">
          <div className="icon">
            {<MdPictureInPicture size={32}/>}
            Calendar
            {<MdAssessment size={32}/>}
            Report 
          </div>
        </div>
        <span className="title">
          Hello User!
        </span>
        {/* <Navbar /> */}
    </div>
  );
}

// class Navbar extends Component {
//   render () {
//       return (
//           <div className = "navbar bg"> 
//               <div className = "wrapper"> 
//                   <h2 className = "title">
//                       Hello User!
//                   </h2>
//               </div>
//           </div>
//       )
//   }
// }

export default App;
