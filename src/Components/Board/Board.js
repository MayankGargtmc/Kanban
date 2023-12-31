import React, { useState } from 'react';
import "./Board.css";
import { MoreHorizontal } from 'react-feather';

import Card from "../Card/Card";
import Dropdown from '../Dropdown/Dropdown';
import Editable from '../Editable/Editable';

function Board() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='board'>
        <div className='board_top'> 
        <p className='board_top_title'>
          To Do<span> 2</span>
          </p>
          <div className='board_top_more' onClick={()=>
            setShowDropdown(true)}>
            <MoreHorizontal />  
            {showDropdown && ( 
            <Dropdown onClose={()=>setShowDropdown(false)}>
              <div className='board_dropdown'>
                <p>Delete Board</p>
              </div>
            </Dropdown>
            )}
          </div>
        </div>
        <div className='board_cards custom-scroll'>
        <Card />
        <Card />
        <Editable 
          displayClass = "board_cards_add"
          text = "Add Card"
          placeholder = "Enter Card Title"
        />
        </div>
    </div>
  )
}

export default Board
