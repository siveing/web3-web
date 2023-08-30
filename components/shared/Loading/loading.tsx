function LoadingScreen() {
    return (
        <div className="absolute inset-0 z-50 bg-gray-200 flex justify-center items-center transition-all opacity-100 ease-in-out duration-1000 h-screen">
            <div className="absolute top-1/2 left-1/2 -ml-10 -mt-3">
                <p className="text-black">Loading . . .</p>
            </div>
        </div >
    );
}

export default LoadingScreen;