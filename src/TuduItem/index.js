import './TuduItem.css'
import './TuduIcon.css'
import { BiCheck, BiCheckDouble, BiXCircle } from "react-icons/bi";
function TuduItem(props) {


    return (
    <li className="TodoItem">

        
        <span className={`Icon Icon-check
        ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete
        }
        >
            {props.completed ? <BiCheckDouble /> : <BiCheck />}
        </span>
        <p className={`TodoItem-p 
            ${props.completed && "TodoItem-p--complete"}`}
            onClick={props.onComplete
            }>
            {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={
            props.onDelete
        }>
            <BiXCircle />

        </span>
    </li>
);
}
export {TuduItem};
