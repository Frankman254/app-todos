// import { motion } from 'framer-motion';
import './TuduCounter.css'
import React from 'react';
import { TuduContex } from '../TuduContex';


function TuduCounter() {
  const {totalTudus, completedTudus} = React.useContext(TuduContex)
  let message;
  const isCompleted = totalTudus === completedTudus;
  if (totalTudus !== 0){
    
    message = isCompleted 
      ? '¡Felicidades! Has completado todas tus Tareas 🎉' 
      : `Has completado ${completedTudus} de ${totalTudus} Tareas`;
  }else{
    message = 'No tienes Tareas por completar!'
  }

  return (

    <div className="TuduCounter">
    {message}

    </div>
    
  );
}

export { TuduCounter };
