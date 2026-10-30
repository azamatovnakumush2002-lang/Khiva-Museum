const Loader = () => {
    return (
        <div className='fixed inset-0 z-9999 flex items-center justify-center bg-[#242222]'>
            <div className='relative flex h-30 w-30 items-center justify-center'>
                <div className='absolute inset-0 animate-spin rounded-full border-2 border-[#555358] border-b-orange-600'></div>

                <img
                    src='/header/museum-logo.png'
                    className='h-13 w-13 object-contain'
                />
            </div>
        </div>
    );
};

export default Loader;
