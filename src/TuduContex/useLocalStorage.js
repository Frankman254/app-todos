import React from "react";


function useLocalStorage (itemName, initialValue) {

const [item, setItem] = React.useState(initialValue);
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(false);
const hasRun = React.useRef(false); // Usamos una ref para controlar la ejecución

React.useEffect(()=>{
    
    if (!hasRun.current){
        // console.log('Una vez');    
        hasRun.current= true;
        setTimeout(()=> {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
                }catch(error){
                    setLoading(false);
                    setError(true);
                }
        }, 2000);
        
    }
});

const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
}
return {
    item,
    saveItem,
    loading, 
    error,
};
}

export { useLocalStorage }