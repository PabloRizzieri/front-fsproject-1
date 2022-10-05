import {React, useEffect, useState} from 'react'
import {Card, CardContent, Typography, Button} from "@mui/material"
import {useNavigate} from "react-router-dom"

const TaskList = () => {

  const navigate = useNavigate()

  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks")
    const data = await res.json()
    setTasks(data)
  }


  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
      })
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])
  return (
    <>
      <h1>Task List</h1>
      {
        tasks.map(task => (
          <Card style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e"
          }}
          key={task.id}>
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div style={{color: "white"}}>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>

              <div>
                <Button variant="contained" color="inherit" onClick={() => navigate(`/task/${task.id}/edit`)}>
                  Edit
                </Button>
                <Button variant="contained" color="warning" onClick={() => handleDelete(task.id)} style={{
                  marginLeft: "0.7rem"
                }}>
                  Delete
                </Button>
              </div>
              
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}

export default TaskList