import React, { useState } from 'react'
import DarkMode from './components/DarkMode'
import Navbar from './components/Navbar'
import Functionalities from './components/Functionalities'


import AlertMgs from './components/AlertMgs'



function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggelMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#03102a'
      document.body.style.color = "white"
      showAlert("Dark mode enabled", "success")

      // setInterval(()=>{                                                  // alert continous  in tiltl bar
      //   document.title= "virus alert"
      // },1500)
      // setInterval(()=>{
      //   document.title= "Download Now My antivirus"
      // },1000)]

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode enabled", "success")
    }
  }

  return (
    <div>

      <Navbar mode={mode} toggelMode={toggelMode} />
      <AlertMgs alert={alert} />
      <div className='container my-3'>
        <Functionalities showAlert={showAlert} heading="enter heading to analyze" mode={mode} />
        <DarkMode />
      </div>



    </div>
  )
}

export default App