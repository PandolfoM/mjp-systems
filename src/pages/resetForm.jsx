import { Box, MediaQuery } from "@mantine/core";
import React, { useState } from "react";
import AccountType from "../components/AccountType";
import Confirmation from "../components/Confirmation";
import Form from "../components/Form";
import Success from "../components/Success";
import "./form.scss";

function resetForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    type: "1",
    network: "",
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
    email: "",
    allSites: "0",
  });
  const [site, addSite] = useState([{ site: "" }]);

  const componentList = [
    <AccountType
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      site={site}
      addSite={addSite}
    />,
    <Form
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Confirmation
      formData={formData}
      page={page}
      setPage={setPage}
      site={site}
    />,
    <Success />,
  ];

  return <div className="form-components-container">{componentList[page]}</div>;
}

export default resetForm;
