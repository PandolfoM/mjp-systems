import React from "react";
import { useForm } from "@mantine/form";
import {
  NumberInput,
  Textarea,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("Send");
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      msg: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ? null : "Invalid email",
      msg: (value) =>
        value.length < 10 ? "Message must have at least 10 letters" : null,
      phone: (value) =>
        /^[0-9]*$/.test(value) ? null : "Invalid phone number",
    },
  });

  const handleSubmit = async (val) => {
    // console.log(val);
    setStatus("Sending...");

    let details;

    if (!val.phone) {
      details = {
        name: val.name,
        email: val.email,
        subject: val.subject,
        msg: val.msg,
      };
    } else {
      details = {
        name: val.name,
        email: val.email,
        subject: val.subject,
        phone: val.phone,
        msg: val.msg,
      };
    }

    const response = await fetch("/contactform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    const sent = await response.json();
    console.log(sent);
    if (sent === "error") {
      setStatus("Error!");
    } else {
      setTimeout(() => {
        setStatus("Send");
      }, 5000);
      setStatus("Sent!");
    }
  };

  return (
    <div id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-form-container">
          <form
            className="contact-form"
            onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <div className="contact-div1">
              <TextInput
                className="contact-name"
                placeholder="Name *"
                variant="unstyled"
                {...form.getInputProps("name")}
              />
              <TextInput
                className="contact-email"
                placeholder="Email *"
                variant="unstyled"
                {...form.getInputProps("email")}
              />
            </div>
            <div className="contact-div2">
              <TextInput
                className="contact-subject"
                placeholder="Subject"
                variant="unstyled"
                {...form.getInputProps("subject")}
              />
              <TextInput
                className="contact-phone"
                placeholder="Phone"
                variant="unstyled"
                pattern="[0-9]+"
                {...form.getInputProps("phone")}
              />
              <Textarea
                className="contact-message"
                placeholder="Message *"
                variant="unstyled"
                minRows={5}
                {...form.getInputProps("msg")}
              />
            </div>
            <UnstyledButton className="contact-send" type="submit">
              {status}
            </UnstyledButton>
          </form>
        </div>
        <footer className="footer-container">
          <div className="footer-content">
            <div>
              <p>&copy; 2022 MJP Systems</p>
            </div>
            <div className="footer-contact">
              <p>
                Cell: <a href="tel:8609449761">860-944-9761</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:markp@mjpsystems.com">markp@mjpsystems.com</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
