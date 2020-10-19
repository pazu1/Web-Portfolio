import React, { useState } from "react";

import "../styles/Contact.scss";
import FSForm from "./FSForm";

function Contact() {
    const [submitStatus, setSubmitStatus] = useState("NONE");
    return (
        <div className="contactRoot page">
            <div className="contactPageGrid">
                <div className="textDiv">
                    <div>
                        Use this handy contact form to get in touch with me.
                        <br />
                        Or send me an email directly at:
                        myemail@emailprovider.com
                    </div>
                </div>
                <div className="formContainer">
                    <FSForm
                        setSubmitStatus={setSubmitStatus}
                        submitStatus={submitStatus}
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;
