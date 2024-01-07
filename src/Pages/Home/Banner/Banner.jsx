import BannerText from "./BannerText/BannerText";

const Banner = () => {

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-[#ff7070] to-[#ff75da]">
            <div className="hero-content text-center text-neutral-content">
                <div className="text-white" data-aos="fade-up">
                    <h4 className="text-lg">Hello There!</h4>
                    <BannerText />
                    <a href="#about" className="btn bg-gradient-to-r from-cyan-600 to-violet-600 hover:opacity-80 rounded-[30px] text-white text-xs border-none min-h-2 h-10 shadow-xl">More About Me</a>
                </div>
            </div>
        </div>
    )
};

export default Banner