import ContactForm from "./Others/ContactForm";
import ContactSocial from "./Others/ContactSocial";
import ContactInfo from "./Others/ContactInfo";
import { useContext } from "react";
import { ScrollingContext } from "../../../Contexts/ScrollingContext";

const Contact = () => {
    const { contactRef } = useContext(ScrollingContext);

    return (
        <div ref={contactRef} id="contact" className="bg-red-100 py-20">
            <div className="w-11/12 max-w-[1440px] mx-auto">
                <h4 className="font-semibold mb-10 underline text-center">Contact</h4>
                <div className="grid lg:grid-cols-2 gap-10 items-center lg:place-items-center">
                    <div className="mb-6 lg:mb-12" data-aos="flip-left">
                        <h4 className="font-semibold text-sky-600 mb-6">Get in touch</h4>
                        <ContactInfo />
                        <h5 className="text-sm font-semibold mt-8 mb-2">Social</h5>
                        <ContactSocial />
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
};

export default Contact