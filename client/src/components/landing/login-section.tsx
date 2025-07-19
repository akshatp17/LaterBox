import React from 'react'

const LoginSection = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-5">
                    <h2 className="text-3xl font-bold text-gray-900">Want to leave a message for your future self?</h2>
                    <p className="text-lg text-gray-600">Join now and send it!</p>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium cursor-pointer">
                        Start Free Today →
                    </button>
                </div>
            </div>
        </>
    )
}

export default LoginSection
