import React, { useState } from "react";
import { Transition, config } from "react-spring/renderprops";
import { CheckCircleIcon, XCircleIcon } from "@primer/octicons-react";

function FSForm(props) {
    const { submitStatus, setSubmitStatus } = props;
    const submitForm = (e) => {
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
    const [showNameLbl, setShowNameLbl] = useState(false);
    const [showEmailLbl, setShowEmailLbl] = useState(false);
    const [showMsgLbl, setShowMsgLbl] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const show = submitStatus === "NONE";
    return (
        <Transition
            items={show}
            config={{ duration: 100 }}
            from={{ transform: "scale(0)", opacity: 0 }}
            enter={{ transform: "scale(1.0)", opacity: 1 }}
            leave={{ position: "absolute", transform: "scale(0)", opacity: 0 }}
        >
            {(show) =>
                show
                    ? (props) => (
                          <form
                              id="contactform"
                              className="formBox"
                              onSubmit={submitForm}
                              action="https://formspree.io/f/xdopgnje"
                              method="POST"
                              style={props}
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
                              <label
                                  style={{ opacity: showMsgLbl ? 1 : 0 }}
                                  for="textarea"
                              >
                                  Message
                              </label>
                              <textarea
                                  required
                                  form="contactform"
                                  id="textarea"
                                  name="textarea"
                                  maxLength="680"
                                  placeholder={showMsgLbl ? "" : "Message"}
                                  onFocus={() => setShowMsgLbl(true)}
                                  onBlur={() => {
                                      if (!msg.length) setShowMsgLbl(false);
                                  }}
                                  value={msg}
                                  onChange={(e) => {
                                      setMsg(e.target.value);
                                  }}
                              />
                              <br />
                              <div>
                                  <button>Submit</button>
                              </div>
                          </form>
                      )
                    : (props) => (
                          <div className="formBox" style={props}>
                              {submitStatus === "SUCCESS" ? (
                                  <>
                                      <span>
                                          <CheckCircleIcon size={48} />
                                      </span>{" "}
                                      <p>
                                          Message was sent successfully.
                                          <br />I will respond as soon as
                                          possible!.
                                      </p>
                                  </>
                              ) : (
                                  <>
                                      <span>
                                          <XCircleIcon size={48} />
                                      </span>
                                      <p>
                                          Could not send message.
                                          <br />
                                          Please make sure you entered a valid
                                          email address.
                                      </p>
                                      <div>
                                          <button
                                              style={{
                                                  width: "60px",
                                                  margin: "auto",
                                                  marginTop: "15px",
                                              }}
                                              onClick={() =>
                                                  setSubmitStatus("NONE")
                                              }
                                          >
                                              Try again
                                          </button>
                                      </div>
                                  </>
                              )}
                          </div>
                      )
            }
        </Transition>
    );
}

export default FSForm;
