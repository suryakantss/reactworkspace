import './App.css'
import { Link, Route, Routes } from 'react-router'
import { Signup } from './components/signup/signup'
import { Home } from './components/home/home'
import { Communication } from './components/communication/communication'
function App() {  return (
    <div>
      <h3>React Training </h3>
     <div>
    <Link to=''>Home</Link>
    <Link to='signup'>Signup</Link>
    <Link to='communication'>Communication</Link>
    
    </div>
     <div>
    <Routes>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='signup' element={<Signup></Signup>}></Route>
      <Route path='communication' element={<Communication></Communication>}></Route>
    </Routes>
     </div>
    </div>
  )
}

export default App
