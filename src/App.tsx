import React, { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Selected from './Pages/Client/Selected'
import Search from './Pages/Client/Search'
import SignIn from './Pages/SingIn'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'
import User from './Pages/Client/User'
import InterviwerUser from './Pages/Interview/User'
import InterviwerSearch from './Pages/Interview/Search'
import PrivateRoutes from './Context/PrivateRoutes'
import { AppRouter } from './Context/AppRouter'

const App: React.FC = () => {
  const [isLoggedIn, setIsSignedIn] = useState(false)
  const login = () => setIsSignedIn(true);
  const logout = () => setIsSignedIn(false);

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <SignIn onSignIn={login} />
      ) : (
        <>
          <Navbar isLoggedIn={isLoggedIn} />
          <Box display='flex' flexDirection='column' minHeight='100vh'>
            <Box flex='1'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/client/search' element={<Search />} />
                <Route path='/client/selected' element={<Selected />} />
                <Route path='/client/user/:id' element={<User />} />
                <Route path='/interviwer/search' element={<InterviwerSearch />} />
                <Route path='/interviwer/user/:id' element={<InterviwerUser />} />
              </Routes>

              {/* <AppRouter /> */}

            </Box>
            <Footer />
          </Box>
        </>
      )}
    </BrowserRouter>
  )
}

export default App
