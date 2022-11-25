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
    <div id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="contact-div1">
              <TextInput
                className="contact-name"
                placeholder="Name *"
                variant="unstyled"
              />
              <TextInput
                className="contact-email"
                placeholder="Email *"
                variant="unstyled"
              />
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
                placeholder="Message *"
                variant="unstyled"
                minRows={5}
              />
            </div>
            <UnstyledButton className="contact-send">Send</UnstyledButton>
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
              <p>Email: <a href="mailto:markp@mjpsystems.com">markp@mjpsystems.com</a></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
