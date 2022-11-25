import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLock,
  faNetworkWired,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import usePasswordValidation from "../hooks/usePasswordValidation";

const toastSlideIn = {
  in: { opacity: 1, transform: "translateX(0)" },
  out: { transform: "translateX(-100%)", opacity: 0 },
  transitionProperty: "transform, opacity",
};

function Form(props) {
  const { formData, setFormData, page, setPage } = props;
  const [error, setError] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const errorTxt = useRef(null);

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      firstPassword: formData.password,
      secondPassword: formData.passwordConfirm,
    });

  useEffect(() => {
    if (errorOpen) return;
    setTimeout(() => {
      setErrorOpen(false);
    }, 5000);
  }, [errorOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateInfo = (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (
      validLength &&
      hasNumber &&
      upperCase &&
      match &&
      specialChar &&
      formData.email.match(regex)
    ) {
      setPage(page + 1);
    }

    if (!formData.email.match(regex)) {
      setErrorOpen(true);
      setError("Not a valid email!");
      return;
    }
    if (!validLength || !hasNumber || !upperCase || !match || !specialChar) {
      setErrorOpen(true);
      setError("Password does not meet requirements!");
      return;
    }
  };

  return (
    <form
      className="form-container"
      onChange={handleChange}
      onSubmit={validateInfo}>
      <h2 className="form-header">Input Details</h2>
      <h4 className="form-subheader">
        {formData.type === "1" ? "Change Password" : "New Account"}
      </h4>
      <div className="form-userinfo">
        <FontAwesomeIcon icon={faSignature} className="start-icon" />
        <input
          type="text"
          name="name"
          required
          defaultValue={formData.name}
          placeholder="Name"></input>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faNetworkWired} className="start-icon" />
        <input
          type="text"
          name="network"
          required
          defaultValue={formData.network}
          placeholder="Network Name"></input>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faEnvelope} className="start-icon" />
        <input
          type="text"
          name="email"
          defaultValue={formData.email}
          placeholder="Email"></input>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faUser} className="start-icon" />
        <input
          type="text"
          name="username"
          required
          defaultValue={formData.username}
          placeholder="Username"></input>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faLock} className="start-icon" />
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          defaultValue={formData.password}
          placeholder="Password"></input>
        <FontAwesomeIcon
          icon={passwordShown ? faEye : faEyeSlash}
          style={{
            position: "absolute",
            cursor: "pointer",
            marginLeft: "-25px",
            top: "50%",
            right: "1rem",
            transform: "translate(0, -50%)",
          }}
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faLock} className="start-icon" />
        <input
          type={passwordShown ? "text" : "password"}
          name="passwordConfirm"
          defaultValue={formData.passwordConfirm}
          placeholder="Confirm Password"></input>
        <FontAwesomeIcon
          className="end-icon"
          icon={passwordShown ? faEye : faEyeSlash}
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </div>

      <ul>
        <li className={validLength ? "success" : "error"}>12 Characters</li>
        <li className={upperCase ? "success" : "error"}>Uppercase letter</li>
        <li className={hasNumber ? "success" : "error"}>At least 1 number</li>
        <li className={specialChar ? "success" : "error"}>At least 1 symbol</li>
        <li className={match ? "success" : "error"}>Passwords Match</li>
      </ul>

      <div className="error-container">
        <Transition
          mounted={errorOpen}
          transition={toastSlideIn}
          duration={300}
          timingFunction="ease">
          {(styles) => (
            <h4
              style={{
                ...styles,
              }}
              ref={errorTxt}>
              {error}
            </h4>
          )}
        </Transition>
      </div>

      <div className="navigation-container">
        <button
          onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button
          type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default Form;
