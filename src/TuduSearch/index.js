import React from 'react';
import './TuduSearch.css'
import { TuduContex } from '../TuduContex';
import { GoX } from "react-icons/go";
function TuduSearch() {
const {searchValue, setSearchValue} = React.useContext(TuduContex)

const inputChange = 
(event) => { setSearchValue(event.target.value);
};

const clearInput = () => {
    setSearchValue('');
}

    return(
        <div className='TuduSearchDiv'>
            <div className="TuduSearchWrapper">

                <input className='TuduSearchInput' placeholder="Buscar Tarea"
                value={searchValue}
                onChange={inputChange}/>

                {searchValue && (<GoX 
                className='ClearInput' 
                onClick={clearInput}/>)}

            </div>
        </div>
    );
}
export {TuduSearch};