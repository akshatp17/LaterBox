const PageLoader = () => {
    return (
        <div className="absolute inset-0 bg-white/20 flex items-center justify-center z-50 rounded-lg">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    )
}

export default PageLoader
