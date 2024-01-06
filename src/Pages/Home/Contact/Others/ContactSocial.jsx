import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";

const ContactSocial = () => {
    const socialInfo = [
        {
            link: "http://facebook.com/shafin5128",
            icon: <FaLinkedinIn />
        },
        {
            link: "http://facebook.com/shafin5128",
            icon: <FaFacebookF />
        },
        {
            link: "http://facebook.com/shafin5128",
            icon: <FaTwitter />
        },
        {
            link: "http://facebook.com/shafin5128",
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