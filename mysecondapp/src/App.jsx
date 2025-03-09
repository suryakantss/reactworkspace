import './App.css'
import { Link, Route, Routes } from 'react-router'
import { Signup } from './components/signup/signup'
import { Home } from './components/home/home'
import { Communication } from './components/communication/communication'
import { ImageSlider } from './components/imageslider/imageslider'
import { SearchFilter } from './components/searchfilter/searchfilter'
function App() {
  return (
    <div>
      <h3>React Training </h3>
      <div>
        <Link to=''>Home</Link>
        <Link to='signup'>Signup</Link>
        <Link to='communication'>Communication</Link>
        <Link to='imageslider'>Image Slider</Link>
        <Link to='searchfilter'>SearchFilter</Link>

      </div>
      <div>
        <Routes>
          <Route path='' element={<Home></Home>}></Route>
          <Route path='signup' element={<Signup></Signup>}></Route>
          <Route path='communication' element={<Communication></Communication>}></Route>
          <Route path='imageslider' element={<ImageSlider></ImageSlider>}></Route>
          <Route path='searchfilter' element={<SearchFilter></SearchFilter>}></Route>


        </Routes>
      </div>
    </div>
  )
}

export default App
