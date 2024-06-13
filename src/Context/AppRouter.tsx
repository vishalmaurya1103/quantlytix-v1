import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../Pages/Home"
import SignIn from "../Pages/SingIn"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='login' element={<SignIn  />} /> */}

                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )
}