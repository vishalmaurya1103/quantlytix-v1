import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Selected from './Pages/Client/Selected'
import Search from './Pages/Client/Search'
import SignIn from './Pages/SingIn'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'
import User from './Pages/Client/User'
import InterviwerUser from './Pages/Interview/InterviwerUser'
import InterviwerSearch from './Pages/Interview/InterviwerSearch'
import PrivateRoutes from './Hooks/ProtectedRoute'
import { isUserLogin } from './Utils/Utils'
import { AuthContext } from './Context/AuthContext'
import { useAuth } from './Hooks/useAuth'

const App: React.FC = () => {
  const [userData, setUserData] = useState<any>();
  const { user, login, logout, setUser } = useAuth();

  console.log("user==", userData);

  return (
    <AuthContext.Provider value={{ user: userData, setUser: setUserData }}>
      <BrowserRouter>

        {userData?.authToken && <Navbar />}
        <Box display='flex' flexDirection='column' minHeight='100vh'>
          <Box flex='1'>
            <Routes>
              <Route path='/login' element={<SignIn />} />
              <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/client/search' element={<Search />} />
                <Route path='/client/selected' element={<Selected />} />
                <Route path='/client/user/:id' element={<User />} />
                <Route path='/interviwer/search' element={<InterviwerSearch />} />
                <Route path='/interviwer/user/:id' element={<InterviwerUser />} />
              </Route>
            </Routes>
          </Box>
          {userData?.authToken && <Footer />}
        </Box>

      </BrowserRouter>
    </AuthContext.Provider>


  )
}

export default App