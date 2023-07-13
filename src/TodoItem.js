import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'


  function TodoItem(props){
    return (
      <div className='other-content'>
        <div className='list-content'>
          <FontAwesomeIcon className='icon' icon={faCheck} />
          <li className="text-white">
            {/* <span>V</span>  */}
            <p>{props.text}</p>
            {/* <span>X</span> */}
          </li>
        </div>
          <FontAwesomeIcon className='icon-2' icon={faX} />
      </div>
    );
  }

  export { TodoItem
   };