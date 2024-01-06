import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleTool = ({tool}) => {
    const {coverImg, title, } = tool;

    return (
        <div className="card card-compact bg-gradient-to-br from-amber-200 to-red-300 shadow-2xl">
            <figure className="h-48"><img className="w-full h-full object-cover" src={coverImg} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <div className="card-actions">
                    <Link to="" className="btn bg-gradient-to-r from-cyan-600 to-violet-600 text-white border-0 rounded-none w-full mt-6">
                        <FaEye />
                        <span>View Deatils</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SingleTool