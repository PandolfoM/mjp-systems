import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faLock,
  faNetworkWired,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mantine/core";
import { useState } from "react";

function Confirmation(props) {
  const { formData, page, setPage, site } = props;
  const [status, setStatus] = useState("Send");
  const [passwordShown, setPasswordShown] = useState(false);

  let displaySites = [];

  site.map((item, i) => {
    displaySites.push(item.site);
  });

  let filtered = displaySites.filter(function (el) {
    return el != "";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    let details;

    if (formData.allSites === "0") {
      details = {
        name: formData.name,
        network: formData.network,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        form: formData.type === "1" ? "Change Password" : "New Account",
      };
    } else {
      details = {
        name: formData.name,
        network: formData.network,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        form: formData.type === "1" ? "Change Password" : "New Account",
        sites: formData.allSites === "1" ? "All Sites" : filtered.join(", "),
      };
    }

    const response = await fetch("/resetform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    const sent = await response.json();
    if (sent === "error") {
      setStatus("Error!");
    } else {
      setPage(page + 1);
    }
  };

  return (
    <form className="form-container" noValidate onSubmit={handleSubmit}>
      <h2 className="form-header">Confirm Details</h2>
      <h4 className="form-subheader">
        {formData.type === "1" ? "Change Password" : "New Account"}
      </h4>
      <div className="form-userinfo">
        <FontAwesomeIcon icon={faLocationDot} className="start-icon" />
        <input
          type="text"
          defaultValue={
            formData.allSites === "1" ? "All Sites" : filtered.join(", ")
          }
          disabled
          placeholder="Sites"></input>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faSignature} className="start-icon" />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="text"
          disabled
          defaultValue={formData.name}></Box>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faNetworkWired} className="start-icon" />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="text"
          disabled
          defaultValue={formData.network}></Box>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            transform: "translate(0, -50%)",
          }}
        />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="email"
          disabled
          defaultValue={formData.email}></Box>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faUser} className="start-icon" />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type="text"
          disabled
          defaultValue={formData.username}></Box>
      </div>

      <div className="form-userinfo">
        <FontAwesomeIcon icon={faLock} className="start-icon" />
        <Box
          sx={{ width: "100%" }}
          component="input"
          type={passwordShown ? "text" : "password"}
          disabled
          defaultValue={formData.password}></Box>
        <FontAwesomeIcon
          icon={passwordShown ? faEye : faEyeSlash}
          className="end-icon"
          onClick={() => setPasswordShown(!passwordShown)}
        />
      </div>
      <div className="error-container"></div>
      <div className="navigation-container">
        <button onClick={() => setPage(page - 1)}>Previous</button>
        <button type="submit">{status}</button>
      </div>
    </form>
  );
}

export default Confirmation;
