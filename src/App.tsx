import React, { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Selected from './Pages/Client/Selected'
import Search from './Pages/Client/Search'
import SignIn from './Pages/SingIn'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'
import User from './Pages/Client/User'

const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleSignIn = () => {
    setIsSignedIn(true)
  }

  return (
    <BrowserRouter>
      {!isSignedIn ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <>
          <Navbar />
          <Box display='flex' flexDirection='column' minHeight='100vh'>
            <Box flex='1'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/selected' element={<Selected />} />
                <Route path='/user/:id' element={<User />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </>
      )}
    </BrowserRouter>
  )
}

export default App
