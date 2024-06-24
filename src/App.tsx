import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Selected from './Pages/Client/Selected'
import Search from './Pages/Client/Search'
import SignIn from './Pages/SingIn'
import Footer from './Components/Footer'
import User from './Pages/Client/SearchUser'
import InterviwerUser from './Pages/Interview/InterviwerUser'
import InterviwerSearch from './Pages/Interview/InterviwerSearch'
import PrivateRoutes from './Hooks/ProtectedRoute'
import { useSelector } from 'react-redux'
import AddUsers from './Pages/Admin/AddUsers'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import 'bootstrap/dist/css/bootstrap.css';
import SearchUser from './Pages/Client/SearchUser'

const App = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <BrowserRouter>
      {user?.authToken && <Navbar />}
      <main className='container  pt-5'>
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/client/search' element={<Search />} />
            <Route path='/client/search/:id' element={<SearchUser />} />
            <Route path='/client/selected' element={<Selected />} />
            <Route path='/interviwer/search' element={<InterviwerSearch />} />
            <Route path='/interviwer/user/:id' element={<InterviwerUser />} />
            <Route path='/admin/user' element={<AddUsers />} />
          </Route>
        </Routes>
      </main>

      {user?.authToken && <Footer />}

    </BrowserRouter>
  )
}

export default App