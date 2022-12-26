import './App.css'

import Navbar from './Components/Navbar'
import { data } from './Components/data'
import Hero from './Components/Hero'
function App() {
   const dataViewer = data.map(items => 
    <Hero
        {...items}
    />
    )

  return (
    <div className="App">
        <Navbar/>
        {dataViewer}
    </div>
  )
}

export default App
