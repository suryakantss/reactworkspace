import { Link, Route, Routes } from 'react-router'
import './App.css'
import { Home } from './components/home/home'
import { Greet } from './components/greet/greet.component'
import { Products } from './components/products/products.comp'
import { Counter } from './components/counter/counter'
//import { CounterClass } from './components/counter/counterclass'
import { Details } from './components/products/details/details'
import { lazy, Suspense } from 'react'
import { Login } from './components/login/login.component'

function App() {
  let CounterClass:any = lazy(()=> import('./components/counter/counterclass'));
   return (
    <div>
    <div>
      <h2>React Training</h2>
      <Link to="">Home</Link>
      <Link to="greet">Greet</Link>
      <Link to="products">Products</Link>
      <Link to="counter">Counter</Link>
      <Link to="classcounter">Class Counter</Link>
      <Link to="login">Login</Link>
      
    </div>
    <div>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="greet" element={<Greet></Greet>}></Route>
        <Route path="products" element={<Products></Products>}>
           <Route path="details/:id" element={<Details></Details>}></Route>
        </Route>
        <Route path="counter" element={<Counter></Counter>}></Route>
        <Route path="classcounter" element={<Suspense fallback={<div>loading....</div>}><CounterClass></CounterClass></Suspense>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
    
      </Routes>
    </div>
    </div>
  )
}

export default App
