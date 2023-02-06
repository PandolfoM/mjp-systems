import React from "react";
import { useForm } from "@mantine/form";
import { Textarea, TextInput, UnstyledButton } from "@mantine/core";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

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
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "mail"), {
        to: import.meta.env.VITE_MAILLIST,
        message: {
          subject: val.subject,
          html: `
            <p>Name: ${val.name}</p>
            <p>Email: ${val.email}</p>
            <p>Message: ${val.msg}</p>
            <p>Phone: ${val.phone ? val.phone : "n/a"}</p>
          `,
        },
      });
      setTimeout(() => {
        setStatus("Send");
      }, 5000);
      setStatus("Sent!");
      form.setValues({ name: "", email: "", msg: "", phone: "", subject: "" });
    } catch (e) {
      console.log(e);
      setStatus("Error!");
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
              <p>&copy; {new Date().getFullYear()} MJP Systems</p>
            </div>
            <div className="footer-contact">
              <p>
                Tel: <a href="tel:8609449761">860-257-8369</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:markp@mjpsystems.com">info@mjpsystems.com</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
