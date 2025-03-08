import './App.css'
import { Greet } from './components/greet/greet.component'
import { Login } from './components/login/login.component'
import { Products } from './components/products/products.comp'

function App() {
   return (
    <div>
     <Greet></Greet>
     <hr />
     <Products></Products>
     <hr />
     <Login></Login>
    </div>
  )
}

export default App
