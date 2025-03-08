import './App.css'
import { Counter } from './components/counter/counter'
import { CounterClass } from './components/counter/counterclass'
import { Greet } from './components/greet/greet.component'
import { Login } from './components/login/login.component'
import { Products } from './components/products/products.comp'

function App() {
   return (
    <div>
      <h2>React Training</h2>
     <Greet></Greet>
     <hr />
     <Products></Products>
     <hr />
     <Login></Login>
     <hr />
     <Counter></Counter>
     <hr />
     <CounterClass></CounterClass>
    </div>
  )
}

export default App
