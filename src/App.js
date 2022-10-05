import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import NavBar from './components/NavBar';
import {Container} from "@mui/material"

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Container>
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/task/new' element={<TaskForm />} />
        <Route path='/task/:id/edit' element={<TaskForm />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
