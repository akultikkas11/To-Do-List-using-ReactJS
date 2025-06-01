import Input from "./Input";
import { useState, useEffect } from "react";
// import ".../public/logo192.png";

const List = ()=>{
    const container = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    }

    const listStyle = {
        width: "30vw",
        // height: "20vh",
        border: "4px solid blue",
        borderRadius: "8px",
        margin: "0vh 0 0 0 ",
        padding: "20px",
    }

    const[toDoList, setToDoList] = useState([]);    //ToDoList will be array of objects. Each task having id and taskName.
    //Adding the task via state-uplifting....
    const addTask = (task)=>{
        const newTask = {
            id: toDoList.length===0 ? 1 : toDoList[toDoList.length-1].id+1,
            taskName: task,
            completed: false,  //Initially task is not completed
        }

        setToDoList([...toDoList, newTask]);
    }

    //To cancel the task if completed(checbox tick)
    const taskComplete = (id)=>{
        const newToDoList = toDoList.map((task)=>{
            if(task.id === id) {
                return {...task, completed: !task.completed};
            }
            return task;
        })

        setToDoList(newToDoList);   //Update the toDoList with the completed tasks
    }


    const [isInitialized, setIsInitialized] = useState(false);

    // Load tasks from localStorage
    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setToDoList(JSON.parse(storedTasks));
        }
        setIsInitialized(true); //  Mark as initialized
    }, []);

    // Save tasks to localStorage ONLY after initialization
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("tasks", JSON.stringify(toDoList));
            console.log("Saved to localStorage:", toDoList);
        }
    }, [toDoList, isInitialized]);
  
    


    //DeleteTask
    const deleteTask = (id)=>{
        const newToDoList = toDoList.filter((task)=>{
            if(task.id === id) {
                return false;
            }
            else return true;
        })

        setToDoList(newToDoList);   //Update the toDoList with the deleted tasks
    }

    //EditTask
    const [editTaskId, setEditTaskId] = useState(null);
    const [editText, setEditText] = useState("");

    //Finds the task which has to be edited.
    const editTask = (id)=>{
        const taskToEdit = toDoList.find((task) => task.id===id);

        if(taskToEdit) {
            setEditTaskId(id);  //Id of task to be edited
            setEditText(taskToEdit.taskName);   // Text of task to be edited 
        }
   } 

   const saveEdit = (id)=>{
        const newToDoList = toDoList.map((task)=>{
            if(task.id === id) {
                return {...task, taskName: editText};  //Update the taskName with the edited text
            }
            else {
                return task;
            }
        });
        setToDoList(newToDoList);  
        setEditTaskId(null);
        setEditText("");
   }

    const cancelEdit = () =>{
        setEditTaskId(null);
        setEditText(""); 
    }

    return (
        <div style={container}>
            <div style={listStyle}>
                <Input addTask={addTask}/>  {/* To take input from user */}

                  <ul>
                      {toDoList.map((task) => (
                        
                          <li className="list-item" key={task.id}>
                            <div className="task">

                                {/* Checkbox if task is completed or not */}
                                <input type="checkbox" checked={task.completed}
                                onChange={()=> taskComplete(task.id) }/>

                                {/*Display the task*/}

                                {editTaskId === task.id ? (
                                    <input 
                                        type="text"
                                        value={editText}
                                        onChange={(e)=> setEditText(e.target.value)}
                                        autoFocus
                                    />
                                ) : (
                                    <span style={{
                                        textDecoration: task.completed ? "line-through" : "none",
                                    }}>
                                        {task.taskName}
                                    </span>
                                )}

                                
                                
                            </div>

                            <div className="actions">

                              {/* To check whether we are in editing mode or not */}
                              {editTaskId === task.id ? (
                                <>
                                    <button onClick={()=>saveEdit(task.id)}>
                                        <img src="save-logo.png" alt="Save" className="logo-icon"></img>
                                    </button>
                                    <button onClick={()=>cancelEdit()}>
                                        <img src="cancel-logo.png" alt="Cancel" className="logo-icon"></img>
                                    </button>
                                </>
                              ) : (
                                <>
                                    <button onClick={()=> editTask(task.id)}>
                                        <img src="edit-logo.png" alt="Edit" className="logo-icon"></img>
                                    </button>
                                    <button onClick={()=> deleteTask(task.id)}>
                                        <img src="delete-logo.png" alt="Delete" className="logo-icon"></img>
                                    </button>
                                </>
                                
                              )}
                            </div>
                          </li>
                      ))}
                  </ul>

            </div>
        </div>
        
    );
};

export default List;
