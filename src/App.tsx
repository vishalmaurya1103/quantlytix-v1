import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Selected from './Pages/Client/Selected'
import Search from './Pages/Client/Search'
import SignIn from './Pages/SingIn'
import Footer from './Components/Footer'
import { Box, Flex } from '@chakra-ui/react'
import User from './Pages/Client/User'
import InterviwerUser from './Pages/Interview/InterviwerUser'
import InterviwerSearch from './Pages/Interview/InterviwerSearch'
import PrivateRoutes from './Hooks/ProtectedRoute'
import { isUserLogin } from './Utils/Utils'

import { Provider, useDispatch, useSelector } from 'react-redux'
import AddUsers from './Pages/Admin/AddUsers'

const App = () => {
  const [userData, setUserData] = useState<any>();
  const user = useSelector((state: any) => state.auth.user);
  console.log("user==", user);

  return (
    <BrowserRouter>
      <Flex direction="column" minH="100vh">
        {user?.authToken && <Navbar />}
        <Box as="main" minHeight={"40vh"} overflow={'auto'} padding={"20px"}>
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
              <Route path='/admin/user' element={<AddUsers />} />

            </Route>
          </Routes>
        </Box>
        {user?.authToken && <Footer />}
      </Flex>

    </BrowserRouter>
  )
}

export default App