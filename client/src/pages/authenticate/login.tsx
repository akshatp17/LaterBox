import { useForm, type SubmitHandler } from 'react-hook-form'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
    email: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset: resetForm
    } = useForm<LoginFormInputs>()

    const navigate = useNavigate()

    // Form Submission Handler
    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            console.log('Login data:', data)
            navigate('/home')
        } catch (error) {
            console.error('Login error:', error)
        } finally {
            resetForm()
        }
    }

    // Google Login Handler
    const handleGoogleLogin = async (credentialResponse: any) => {
        const idToken = credentialResponse.credential;
        try {
            console.log("Google login ID token:", idToken);
            navigate('/home')
        } catch (error: any) {
            console.log("Error caught in handleGoogleLogin:", error);
        }
    };

    // Google Login Error Handler
    const handleGoogleLoginError = () => {
        console.error("Google login error callback triggered");
    };

    return (
        <div className='w-screen h-screen flex items-center justify-center bg-white p-2'>
            <div className='bg-red-500 p-8 rounded-l-lg w-2/3 h-full border border-r-0 border-gray-200'>
                Left Box
            </div>
            <div className='bg-white p-8 rounded-r-lg w-1/3 h-full border border-l-0 border-gray-200 flex flex-col justify-center'>
                <div className='max-w-sm mx-auto w-full'>
                    <h2 className='text-2xl font-bold text-center mb-8'>Login to your Account</h2>

                    {/* Form for login */}
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Email
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                placeholder='Enter your email'
                            />
                            {errors.email && (
                                <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.password ? 'border-red-300' : 'border-gray-300'
                                    }`}
                                placeholder='Enter your password'
                            />
                            {errors.password && (
                                <p className='mt-1 text-sm text-red-600'>{errors.password.message}</p>
                            )}
                        </div>

                        <div className='flex items-center justify-between'>
                            <label className='flex items-center'>
                                <input
                                    type="checkbox"
                                    {...register('rememberMe')}
                                    className='mr-2'
                                />
                                <span className='text-sm text-gray-600'>Remember me</span>
                            </label>
                            <a href="#" className='text-sm text-blue-600 hover:underline'>
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-2 px-4 rounded-md focus:outline-none cursor-pointer ${isSubmitting
                                ? 'bg-blue-400 cursor-not-allowed text-white'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    {/* Google Login Section OUTSIDE FORM */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-black">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className={`mt-6 w-full flex justify-center`}>
                            <div>
                                <GoogleOAuthProvider clientId="712195196239-337nnqqvle3hq9biuc5302m7p2be6a8s.apps.googleusercontent.com">
                                    <GoogleLogin
                                        onSuccess={(credentialResponse) => {
                                            handleGoogleLogin(credentialResponse);
                                        }}
                                        onError={handleGoogleLoginError}
                                    />
                                </GoogleOAuthProvider>
                            </div>
                        </div>
                    </div>

                    {/* Register Section */}
                    <p className='text-center text-sm text-gray-600 mt-6 bottom-0'>
                        Not Registered Yet?{' '}
                        <a href="/register" className='text-blue-600 hover:underline'>
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
