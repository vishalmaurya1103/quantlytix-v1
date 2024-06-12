import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Selected from './components/Selected';
import Search from './components/Search';
import SignIn from './components/SingIn';
import Footer from './components/Footer';
import { Box, calc } from '@chakra-ui/react';

const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <BrowserRouter>
      {!isSignedIn ? (
        <SignIn />
      ) : (
        <>
          <Navbar />
          <Box height={550}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/selected" element={<Selected />} />
          </Routes>
          </Box>
         
          <Footer></Footer>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
