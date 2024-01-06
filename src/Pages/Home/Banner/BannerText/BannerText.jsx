import Typewriter from 'typewriter-effect';

const BannerText = () => {
    const textArray = [
        "Tasnim Alam Shafin",
        "a professional Data Analyst"
    ]

    return (
        <div className="mb-2">
            <div className='text-lg md:text-3xl flex justify-center font-semibold my-4'>
                <span>I'm&nbsp;</span>
                <Typewriter
                    options={{
                        strings: textArray,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    )
};

export default BannerText