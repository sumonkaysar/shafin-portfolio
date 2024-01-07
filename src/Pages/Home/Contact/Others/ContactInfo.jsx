import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactInfo = () => {

    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <div>
                    <p className="bg-primary text-white w-16 h-16 flex justify-center items-center rounded-full">
                        <FaLocationDot size="22px" />
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Address:</p>
                    <h4 className="font-semibold sm:text-xl">Dhaka, Bangladesh</h4>
                </div>
            </div>
            <div className="flex items-center gap-3 mb-6">
                <div>
                    <p className="bg-primary text-white w-16 h-16 flex justify-center items-center rounded-full">
                        <FaPhone size="22px" />
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Phone:</p>
                    <Link to="tel:+8801721917848" className="font-semibold sm:text-xl break-all">+8801721917848</Link>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <p className="bg-primary text-white w-16 h-16 flex justify-center items-center rounded-full">
                        <FaEnvelope size="22px" />
                    </p>
                </div>
                <div>
                    <p className="text-gray-500">Mail:</p>
                    <Link to="mailto:shafin.bsmrstu051@gmail.com" className="font-semibold sm:text-xl break-all">shafin.bsmrstu051@gmail.com</Link>
                </div>
            </div>
        </div>
    )
};

export default ContactInfo