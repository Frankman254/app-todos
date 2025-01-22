import './TuduList.css'

function TuduList({children}) {
    return(
    <ul className='Child'>
        {children}
    </ul>
);
}
export {TuduList};