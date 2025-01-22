import React from "react";
import './TuduForm.css'
import { TuduContex } from "../TuduContex";
function TuduForm() {

    const {
        setOpenModal,
        addTudu,
    } = React.useContext(TuduContex);

    const [newTuduValue, setNewTuduValue] = React.useState('');

    const onSubmit = (event) => {
        // event.preventDefault();
        addTudu(newTuduValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTuduValue(event.target.value);
        // console.log(event.target.value);
    }

    return(
        <form className="TuduForm" onSubmit={onSubmit}>
            <label className="TuduFormLabel">Escribe una nueva Tarea</label>
            <textarea className="TuduFormTextarea"
            value={newTuduValue}
            onChange={onChange}
            placeholder="Preparar la cena"/>
            <div className="ButtonContainer">
                <button className="CancelButton"
                type="button"
                onClick={onCancel}
                >Cancelar</button>
                <button
                type="button"
                onClick={onSubmit}
                className="SaveButton">Guardar</button>
            </div>
        </form>
    );
}
export {TuduForm};