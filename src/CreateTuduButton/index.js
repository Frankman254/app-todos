import './CreateTuduButton.css'
import { IoCreate } from "react-icons/io5";
import React from 'react';
import { TuduContex } from '../TuduContex';
function CreateTuduButton() {
  const { 
    setOpenModal,
} = React.useContext(TuduContex)
    return(

      <button className="CreateTuduButton" onClick={
        (event) => {
          
        setOpenModal(state => !state);
      }}>
        <IoCreate />
      </button>
    );
  } 
export {CreateTuduButton};