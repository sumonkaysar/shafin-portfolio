import { FaFacebookF, FaGithub, FaInstagram, FaKaggle, FaLinkedinIn } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";

const ContactSocial = () => {
    const socialInfo = [
        {
            link: "http://linkedin.com/in/tasnim-alam-shafin-871311270",
            icon: <FaLinkedinIn />
        },
        {
            link: "http://kaggle.com/tasnimalamshafin",
            icon: <FaKaggle />
        },
        {
            link: "http://github.com/shafin051",
            icon: <FaGithub />
        },
        {
            link: "http://facebook.com/shafin5128",
            icon: <FaFacebookF />
        },
        {
            link: "http://instagram.com/shafin051?igsh=MXJnaDliMW9kbWJwOA==",
            icon: <FaInstagram />
        },
    ]
    return (
        <div className="flex gap-3">
            {
                socialInfo.map((singleSocial, i) =>
                    <SocialIcon
                        key={i}
                        link={singleSocial.link}
                        icon={singleSocial.icon}
                    />
                )
            }
        </div>
    )
};

export default ContactSocial