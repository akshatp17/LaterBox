import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    // Set document title
    document.title = "404 Not Found | LaterBox";

    const handleGoHome = () => {
        navigate('/home');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">This page does not exist or is under construction</p>
            <button
                onClick={handleGoHome}
                className="px-6 py-3 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
            >
                Go to Home Page
            </button>
        </div>
    );
};

export default ErrorPage;
