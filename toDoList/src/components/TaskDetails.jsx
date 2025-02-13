import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function TaskDetails(props) {

    const { taskId } = useParams();
    const [taskState, setTask] = useState("");

    const task = props.tasksArr.find((taskObj) => {
        return String(taskObj.id) === String(taskId);
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const taskObj = {
            task: taskState,
            completed: task.completed,
            id: task.id
        }

        // invoke function in the parent component 
        props.callbackToEdit(taskObj);

        // clear form
        setTask("");
    }

    return (
        <div className='list-container'>
            <h1>{task.task}</h1>
            <form className="form-box" onSubmit={handleSubmit}>
                <label>
                    <input className="todo-input"
                        type="text"
                        name="title"
                        placeholder="Replace the text of the task here"
                        value={taskState}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button className="add">Submit</button>
                </label>
            </form>
                <Link to="/my-lists" className="link-btn" >Back</Link>
            

        </div>
    );
}

export default TaskDetails;