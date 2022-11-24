import React from "react";
import { useForm } from "@mantine/form";
import { Textarea, TextInput, UnstyledButton } from "@mantine/core";

export default function Contact() {
  const form = useForm({
    name: "",
    email: "",
    subject: "",
    phone: "",
    msg: "",
  });

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="contact-div1">
            <TextInput className="contact-name" placeholder="Name" variant="unstyled"/>
            <TextInput className="contact-email" placeholder="Email" variant="unstyled"/>
          </div>
          <div className="contact-div2">
            <TextInput
              className="contact-subject"
              placeholder="Subject"
              variant="unstyled"
            />
            <TextInput
              className="contact-phone"
              placeholder="Phone"
              variant="unstyled"
            />
            <Textarea
              className="contact-message"
              placeholder="Message"
              variant="unstyled"
              minRows={5}
            />
          </div>
          <UnstyledButton className="contact-send">Send</UnstyledButton>
        </form>
      </div>
      
    </div>
  );
}
