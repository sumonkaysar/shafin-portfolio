const About = () => {

    return (
        <div id="about" className="bg-rose-100 py-20">
            <div className="w-11/12 max-w-[1440px] mx-auto">
                <h4 className="font-semibold mb-10 underline text-center">About Me</h4>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div data-aos="fade-up">
                        <img className="w-full rounded-xl"
                            src="https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg"
                            alt="" />
                    </div>
                    <div data-aos="fade-up">
                        <h4 className="font-semibold text-sky-600 text-sm">Who am I?</h4>
                        <h4 className="text-xl font-semibold my-2">I'm Tasnim Alam Shafin</h4>
                        <p className="text-gray-600 text-sm md:text-base">I am a Data Analyst, and I'm very passionate and
                            dedicated to my work. I have acquired the skills and knowledge necessary to make your
                            project a success.</p>
                        <p className="text-gray-600 mt-1 text-sm md:text-base">Delivering work within time and budget which
                            meets client's requirements is my moto.</p>
                        <a className="btn bg-sky-600 rounded-[0px] text-white border-none mt-3 hover:bg-sky-500">Download
                            CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About