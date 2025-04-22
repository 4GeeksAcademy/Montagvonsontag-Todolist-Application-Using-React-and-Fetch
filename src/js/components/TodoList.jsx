import React, { useEffect, useState } from "react";

export const TodoList = () => { 

    const [data, setData] = useState([])
    const [task, setTask] = useState('')
   
//create user 
    const createUser = async () => {
        try {
            const response = await fetch('https://playground.4geeks.com/todo/users/Je_suis_Paco',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            getUserTodos();
        } catch (error) {
            console.log(error);
        }
    }
    
//get tasks
const getUserTodos = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/todo/users/Je_suis_Paco');
        const data = await response.json();
        setData(data);
    } catch (error) {
        console.log(error)
        createUser(); //in case of error, create user        
    }
}

//add task  
const createTask = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/todo/todos/Je_suis_Paco',{
            method: "POST",    
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ label: task, is_done: false })
        });
        getUserTodos()
    } catch (error) {
        console.log(error)
    }
}

//delete todos 
const deleteTask = async (id) => {
    try {
        const response = await fetch('https://playground.4geeks.com/todo/todos/'+id,{
            method: "DELETE"  
        });
        const data = await response.json();
    } catch (error) {
        console.log(error)
        
    }
    getUserTodos()
}

useEffect(() => {
    getUserTodos(); //run function
  }, []);


  const handleSubmit = e => {
    e.preventDefault()
    createTask()
    setTask('')
}

return (
    <div className="container">
		<h1>todos</h1>
    <div>
        <form onSubmit={handleSubmit}>
            <input className="m-4"
                type="text" 
                value={task} 
                placeholder="add pending task"
                onChange={e => setTask(e.target.value)} />
            <input type="submit" hidden />
        </form>

        <div>
            <ul className="to-do-container">
            {data.todos?.map((el, i) => 
                <li key={i} className="task-container m-0 d-flex mx-2 ">
                     {el.label}
                    <span className="fa-solid fa-trash ms-auto" 
                        style={{ 
                            fontSize: "20px",
                            color: "red",                           
                        }}
                        onClick={()=> deleteTask(el.id)}></span> 
                </li>)}
            </ul>
        </div>
    </div>
    </div>
)
}