import { CheckIcon } from "@heroicons/react/20/solid"

const PricingSection = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        One simple price for everything you need
                    </h2>
                    <p className="text-lg text-gray-600">
                        No subscriptions. No hidden fees. Just lifetime access.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 w-full lg:w-96 relative">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
                            <p className="text-gray-600 mb-6">Get started instantly</p>

                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gray-900">$0</span>
                                <span className="text-gray-600 ml-2">forever free</span>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Up to 5 tasks</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Basic task management</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Simple reminders</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Email notifications</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Basic analytics</span>
                            </li>
                        </ul>

                        <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                            Start free →
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white rounded-2xl border-2 border-purple-500 p-8 w-full lg:w-96 relative">
                        {/* Recommended Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                                RECOMMENDED
                            </span>
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lifetime Pro</h3>
                            <p className="text-gray-600 mb-6">Perfect for professionals</p>

                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gray-900">$29</span>
                                <span className="text-gray-600 ml-2">one time payment</span>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Unlimited tasks</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Advanced task organization</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Smart scheduling system</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Priority support</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                                <span className="text-gray-700">Advanced analytics & insights</span>
                            </li>
                        </ul>

                        <button className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors font-medium">
                            Get started →
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingSection
