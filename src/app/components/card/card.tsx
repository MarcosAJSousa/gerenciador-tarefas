import "./card.scss";
import { FiEdit2 } from "react-icons/fi";
import { FiSlash } from "react-icons/fi";


interface CardProps {
    todo: string,
    completed: boolean,
    userid: number
}

export function Card({ todo, completed, userid } : CardProps){   
    return(
        <div className="card">
            <h2>{todo}</h2>
            <p>Valor:{completed}</p>
            <p>User ID:{userid}</p>
            <div className='buttons-grid'>
                <button className='button'><FiSlash size={25} color="#222"></FiSlash> </button>
                <button className='button'><FiEdit2 size={25} color="#222"></FiEdit2></button>
          </div>
        </div>
    )
}