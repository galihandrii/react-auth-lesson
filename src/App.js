
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepages';
import Register from './pages/Register';
import ProtectedRoute from './hoc/ProtectedRoute';
import Discovery from './pages/Discoverypage';
import AddNewCar from './pages/AddNewCar';
import ProtectedRoute2 from './hoc/ProtectedRoute2';
import Editpage from './pages/Editpage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path='/Discovery' element={<Discovery/>}/>
        <Route path='/add-car' element={<AddNewCar/>}/>
        <Route path='/Editcar/:id' element={<Editpage/>}/>
  </Route>

      {/*<Route 
        path='/Discovery' 
        element={<ProtectedRoute2><Discovery/></ProtectedRoute2>}>
</Route>*/}


    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
