import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LandingPage from '../pages/landing'

// Lazy Loading Every Other Page
const LoginPage = lazy(() => import('../pages/authenticate/login'))
const RegisterPage = lazy(() => import('../pages/authenticate/register'))

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Unprotected routes  */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* Protected routes */}

                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRouter
