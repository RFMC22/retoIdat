import {Section} from "./components"
import {services} from './data/data'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Section services={services}/>
    </div>
  )
}

export default App
