import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Selected from './components/Selected'
import Search from './components/Search'
import SignIn from './components/SingIn'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'

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
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Box flex="1">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
                <Route path='/selected' element={<Selected />} />
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
