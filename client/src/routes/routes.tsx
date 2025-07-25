import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LandingPage from '../pages/landing'
import LoginPage from '../pages/authenticate/login'
import RegisterPage from '../pages/authenticate/register'
import PageLoader from '../skeletons/loader'
import ErrorPage from '../pages/error-page'

// Lazy Loading Every Other Page
const HomePage = lazy(() => import('../pages/home-page'))
const ProfilePage = lazy(() => import('../pages/profile-page'))

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<PageLoader />}>
                <Routes>

                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/:username" element={<ProfilePage />} />


                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default AppRouter
