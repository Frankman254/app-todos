import React from "react";
import { useLocalStorage } from './useLocalStorage';
const TuduContex = React.createContext();

function TuduProvider({ children }){
const {
    item: tudus, 
    saveItem: saveTudus, 
    loading, 
    error,
    } = useLocalStorage('TUDUS_V1', []);
    // variable para buscar un valor aparti de cadena vacia
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);
    // variable para obtener los todos completados (objetos)
    const completedTudus = tudus.filter(tudu => !!tudu.completed).length;

    const totalTudus = tudus.length;

// funcion para bsucar todos apartir del texto
    const tuduMatch = tudus.filter(
    (tudu) => {
    const tuduText = tudu.text.toLowerCase();
    const seachText = searchValue.toLowerCase();
    return tuduText.includes(seachText);
    }
    );
// funcion para marcar un todo como completado recibe el texto del todo
    const itemComplete = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
        (todo) => todo.text === text
    );
    newTudus[tuduIndex].completed=!newTudus[tuduIndex].completed;
    saveTudus(newTudus);
    };
// funcion para eliminar el todo de la lista recibe un todo
    const itemDelete = (text) => {
    const newTudus = [...tudus];
    const tuduIndex = newTudus.findIndex(
        (todo) => todo.text === text
    )
    newTudus.splice(tuduIndex, 1);
    saveTudus(newTudus)
    }  
    const addTudu =(text) => {
        const newTudus = [...tudus];
        newTudus.push({
            text,
            completed:false,
        });
        saveTudus(newTudus);
        } 
    
    
    return(
    <TuduContex.Provider value={
        {
        addTudu,
        loading,
        error,
        completedTudus,
        totalTudus,
        searchValue,
        setSearchValue,
        tuduMatch,
        itemComplete,
        itemDelete,
        openModal,
        setOpenModal,
        }
    }>
        {children}
    </TuduContex.Provider>
    );
}
function TuduConsumer(){
    return(
    <TuduContex.Consumer></TuduContex.Consumer>
    );
}

export {TuduContex, TuduProvider, TuduConsumer};

// lista de todos por default
// localStorage.removeItem('TUDUS_V1');
// const defaultTudus = [
//   {text: 'Cortar cesped', completed:true},
//   {text: 'Tomar el Curso de Intro a React.JS', completed:false},
//   {text: 'Crear Portafolio', completed:false},
//   {text: 'Encontrar trabajo', completed:false},
//   {text: 'Conseguir Novia', completed:false},
//   {text: 'Llorar en la llorería', completed:true},
//   {text: 'LALALA', completed:true}
// ];
// localStorage.setItem('TUDUS_V1', JSON.stringify(defaultTudus));
// funcion principal react