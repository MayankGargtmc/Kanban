import React, { useState } from 'react';
import "./App.css";
import Board from './Components/Board/Board';
import Editable from './Components/Editable/Editable';

function App() {
  const [boards, setBoards] = useState([
    {
      id:Date.now() + Math.random()*2,
      title: "To Do",
      cards:[
        {
          id:Date.now()+ Math.random(),
          title:"Card 1",
          tasks:[],
          labels:[{
            text:"frontend",
            color:"blue"
          }],
          desc:"jfisdik k kk",
          date: "",
        },
        {
          id:Date.now()+ Math.random(),
          title:"Card 1",
          tasks:[],
          labels:[{
            text:"backend",
            color:"brown"
          }],
          desc:"jfisdik k kk",
          date: "",
        },
      ]
    }
  ])
  return (
    <div className="App">
      <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>
      <div className='app_outer'>
        <div className='app_boards'>
          {
            boards.map((item)=><Board
            key={item.id}
            />)
          }
          <Board />
          <Board />
          <div className='app_boards_board'>

          <Editable 
            displayClass = "app_board_board_add"
            text ="Add Board"
            placeholder = "Enter board title" 
            />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
