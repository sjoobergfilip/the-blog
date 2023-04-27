const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
            <div>
                <h1 className='lg:text-7xl uppercase text-5xl'>
                    En plats för alla södraiter
                </h1>
                <h2 className='mt-5 md:mt-2'>
                    Välkommen till{" "}
                    <span className='underline decoration-4 decoration-[#D6AF32]'>
                        Alla Södrafans
                    </span>{" "}
                    favorit blogg just nu.
                </h2>
            </div>
            <p className='pt-5 md:pt-2 text-[#D6AF32] max-w-sm text-xs'>
                Vi följer Södra | De senaste nyheterna | Och uppdateringar varje
                vecka
            </p>
        </div>
    );
};

export default Banner;
