import {
  Modal,
  PasswordInput,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/Auth";

function ClientAccessModal(props) {
  const navigate = useNavigate();
  const { isClientModalOpen, setIsClientModalOpen } = props;
  const form = useForm({
    initialValues: {
      password: "",
    },
  });

  const handleSubmit = async (values) => {
    const response = await fetch("/validateClientAccess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    if (data === "error") {
      form.setErrors({ password: "Invalid Password" });
    } else {
      try {
        Auth.login();
        setIsClientModalOpen(false);
        navigate("/dashboard", { replace: true });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Modal
      className="client-access-modal"
      withCloseButton={false}
      centered
      opened={isClientModalOpen}
      onClose={() => setIsClientModalOpen(false)}>
      <Title order={3}>Guest Area</Title>
      <Text component="p">Please enter the password below</Text>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <PasswordInput
          variant="unstyled"
          placeholder="Password"
          {...form.getInputProps("password")}
        />
        <UnstyledButton className="submit-button" type="submit">
          Go
        </UnstyledButton>
      </form>
    </Modal>
  );
}

export default ClientAccessModal;
