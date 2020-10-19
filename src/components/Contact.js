import React, { useState } from "react";
import { Transition } from "react-spring";
import { CheckCircleIcon, XCircleIcon } from "@primer/octicons-react";

import "../styles/Contact.scss";

function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [showNameLbl, setShowNameLbl] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("NONE");
    const [showEmailLbl, setShowEmailLbl] = useState(false);
    const submitForm = (e) => {
        // To formspree
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setSubmitStatus("SUCCESS");
            } else {
                setSubmitStatus("ERROR");
            }
        };
        xhr.send(data);
    };
    return (
        <div className="contactRoot">
            <div className="contactPageGrid">
                <span className="textSpan">
                    Use this handy contact form to get in touch with me.
                    <br />
                    Or send me an email directly at: myemail@emailprovider.com
                </span>
                <div className="formBox">
                    {submitStatus === "NONE" ? (
                        <form
                            id="contactform"
                            onSubmit={submitForm}
                            action="https://formspree.io/f/xdopgnje"
                            method="POST"
                        >
                            <label
                                style={{ opacity: showNameLbl ? 1 : 0 }}
                                for="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={showNameLbl ? "" : "Name"}
                                required
                                onFocus={() => setShowNameLbl(true)}
                                onBlur={() => {
                                    if (!name.length) setShowNameLbl(false);
                                }}
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <label
                                style={{ opacity: showEmailLbl ? 1 : 0 }}
                                for="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={showEmailLbl ? "" : "Email"}
                                required
                                onFocus={() => setShowEmailLbl(true)}
                                onBlur={() => {
                                    if (!email.length) setShowEmailLbl(false);
                                }}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <label for="textarea">Message</label>
                            <textarea
                                required
                                form="contactform"
                                id="textarea"
                                name="textarea"
                                maxLength="680"
                            />
                            <br />
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    ) : (
                        <div>
                            {submitStatus === "SUCCESS" ? (
                                <>
                                    <span>
                                        <CheckCircleIcon size={48} />
                                    </span>{" "}
                                    <p>Message was sent successfully.</p>
                                </>
                            ) : (
                                <>
                                    <span>
                                        <XCircleIcon size={48} />
                                    </span>
                                    Could not send message. Please make sure you
                                    entered a valid email address.
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
