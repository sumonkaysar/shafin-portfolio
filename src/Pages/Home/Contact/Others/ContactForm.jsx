const ContactForm = () => {

    return (
        <form data-aos="flip-right">
            <div className="flex gap-3 mb-4">
                <input type="text" placeholder="First Name"
                    className="input input-bordered input-secondary w-full" />
                <input type="text" placeholder="Last Name"
                    className="input input-bordered input-secondary w-full" />
            </div>
            <div>
                <input type="email" placeholder="Email"
                    className="input input-bordered input-secondary w-full mb-4" />
            </div>
            <div>
                <textarea rows="6" className="textarea textarea-secondary w-full mb-4"
                    placeholder="Message"></textarea>
            </div>
            <div className="text-center">
                <button className="btn btn-secondary">Send Message</button>
            </div>
        </form>
    )
};

export default ContactForm