
import b1 from '../assets/banner1.jpg';
import b2 from '../assets/banner2.jpg';

const Banner = () => {
    return (
            <div>
                <div className="carousel w-full min-h-64">
                <div id="item1" className="carousel-item w-full my-5 px-10 font-poppins">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
                        
                        <img src={b1} className="w-full lg:w-1/2 h-[70vh] object-cover rounded-lg shadow-md" />

                        <div className="text-center lg:text-left flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                               "Your Marketplace for the Best Tech Recommendations"
                            </h2>
                            <p className="text-base lg:text-lg font-medium leading-relaxed">
                                Welcome to <span className='text-amber-800 font-bold'>SumMah Bazaar</span>— your trusted tech marketplace for honest queries, smart suggestions, and  <br /> better product picks. Discover gadgets, compare alternatives, and shop smarter every day.
                            </p>
                        </div>

                    </div>
                </div>

                <div id="item2" className="carousel-item w-full my-5 px-10 font-poppins">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
                        
                        <img src={b2} className="w-full lg:w-1/2 h-[70vh] object-cover rounded-lg shadow-md" />

                        <div className="text-center lg:text-left flex-1">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                                “Find the Best Tech. Get Real Recommendations.”
                            </h2>
                            <p className="text-base lg:text-lg font-medium leading-relaxed">
                                This platform is going to provide tech items to individuals. 
                                From smartphones to gaming gear — explore honest queries, <br /> helpful advice,
                                and product alternatives tailored for smart buyers like you.
                            </p>
                        </div>

                     </div>
                </div>
            </div>

                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                </div>
            </div>
    );
};

export default Banner;