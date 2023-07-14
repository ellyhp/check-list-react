import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'


  function TodoItem(props){
    return (
      <div className='other-content'>
        <div className='list-content'>
       
        <span>
          <FontAwesomeIcon className=
          {`icon ${props.completed && "item-complete-icon"}`}
          onClick={props.onComplete}
           icon={faCheck} />
          </span>
          <li className="text-white">
            <p className={` ${props.completed && "item-completed"}`}>{props.text}</p>
          </li>
        </div>
          <FontAwesomeIcon className='icon-2' icon={faX}    
          onClick={props.onDelete}
           />
      </div>
    );
  }

  export { TodoItem
   };