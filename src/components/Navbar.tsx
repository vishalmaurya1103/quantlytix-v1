import { ReactNode, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { userRole } from '../Utils/Const';
import { clearLocalStorage, getUserRole } from '../Utils/Utils';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import logo from '../Images/logo.png';

export default function WithAction() {
  const [links, setLinks] = useState(Array<any>)
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const role = getUserRole();
    if (role === userRole.client) {
      setLinks([
        { label: 'Home', href: '/' },
        { label: 'Search', href: '/client/search' },
        { label: 'Selected', href: '/client/selected' },
      ])
    }
    else if (role === userRole.interviwer) {
      setLinks([
        { label: 'Home', href: '/' },
        { label: 'Interviews', href: '/interviwer/search' },
      ])
    }
    else if (role === userRole.admin) {
      setLinks([
        { label: 'Home', href: '/' },
        { label: 'Users', href: '/admin/user' },
      ])
    }
  }, [])

  const Logout = () => {
    dispatch(logout());
    clearLocalStorage();
    navigate('login')
  }

  return (

    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            <img src={logo} width={'150px'} />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <form className="d-flex">
            <div className="btn-group">
              <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                <span className="pi pi-user"></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li><button className="dropdown-item" type="button">My Account</button></li>
                <li><button onClick={Logout} className="dropdown-item" type="button">Logout</button></li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}
