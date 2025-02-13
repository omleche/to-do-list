import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function ListItem(props) {
    console.log(props )

    return (
        <div className="list-item">
            <div className="list-text">
            {/* <p>{props.listDetails.completed ? "✅" : "❌"} {props.listDetails.task}</p> */}
            <p > {props.listDetails.completed ? "✅" : "❌"}  </p>
            <p className={props.listDetails.completed ? 'completed' : ''}>{props.listDetails.task}</p>
            <Link className="icon" to={`/taskDetails/${props.listDetails.id}`}>
                    <button><FontAwesomeIcon icon={faPencil} size="lg" color="#3498db"/></button>
            </Link>
            </div>
            <div>

                <button className="delete" onClick={() => { 
                    props.callbackToDelete(props.listDetails.id)
                
                 }}>
                    Delete
                </button>
                <button className="complete" onClick={() => { 
                    props.setTaskToDisplay(prev => prev.map(task => task.id === props.listDetails.id ? {...task, completed: !task.completed} : task))
                 }}>
                    Checked
                </button>
                


            </div>
        </div>
    );
}

export default ListItem;