import NavBar from '../../components/NavBar/NavBar';
import Logo from '../../components/Logo/Logo';
import HomePage from '../HomePage/HomePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
      </Routes>
      <Logo/>
      <HomePage/>
      <ProjectPage/>
    </div>
  );
}

 
