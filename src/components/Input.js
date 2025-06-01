import AddButton from "./AddButton.js";
import {useState} from "react";

const Input = ({ addTask })=> {
    const style = {
        width: "80%",
        height: "30px",
        border: "0.5px solid gray",
        borderRadius: "5px",
        padding: "10px",
        margin: "0 20px 24px 0",
    }

    const [newTask, setNewTask] = useState("");
    
    //For state uplifting, from Addbutton
    const handleAdd = ()=>{
        addTask(newTask);    //Call the function from props
        setNewTask(""); // Clear the input field after adding the task
    }
    
    return (
        <div>
            <input placeholder="Enter Task" style={style} value={newTask} onChange={(event)=>{     //value is controlled by state (Controlled component)
                setNewTask(event.target.value);
            }}/>
            <AddButton handleAdd={handleAdd} disabled={newTask.trim()===""}/>
        </div>
    )
}

export default Input;