import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import Sub from './Dash-components/Sub'
// import AddNote from './Dash-components/AddNote'
// import Profile from './Dash-components/profile'
import About from './Dash-components/About'
import Dashprofile from './Dash-components/Dashprofile'
// import Notes from './Dash-components/Notes'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Router>
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sub' element={<Sub/>}></Route>
          <Route path='/profile' element={<Dashprofile/>}></Route>
          {/* <Route path='/upload' element={[<Addnotes/>,<Notes/>]}></Route> */}
          <Route path='/about' element={<About/>}></Route>

          



        </Routes>
      </Router>
    </div>
  )
}

export default App
