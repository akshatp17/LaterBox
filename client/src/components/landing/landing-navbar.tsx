import { useNavigate } from 'react-router-dom';

const LandingNavbar = () => {

    const navigate = useNavigate();

    const handleAuthenticate = () => {
        // Navigate to the login page when the button is clicked
        navigate('/login');
    }

    return (
        <div className='flex justify-between items-center p-4 w-[90%] mx-auto'>
            <button
                className='text-3xl cursor-pointer font-black'
                onClick={() => navigate('/')}
            >LaterBox</button>
            <button
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer'
                onClick={handleAuthenticate}
            >
                Join Us
            </button>
        </div>
    )
}

export default LandingNavbar
