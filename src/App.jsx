import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from'./pages/MainPage.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee, faUser, faCheckCircle, faGithub)

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      
    </Router>
  )
}

export default App
