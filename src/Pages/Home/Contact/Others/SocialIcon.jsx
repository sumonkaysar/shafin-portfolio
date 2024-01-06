import { Link } from "react-router-dom";

const SocialIcon = ({link, icon}) => {

    return (
        <Link to={link}
            className="bg-primary hover:bg-secondary text-white w-8 h-8 flex justify-center items-center rounded shadow-xl">
            {icon}
        </Link>
    )
};

export default SocialIcon