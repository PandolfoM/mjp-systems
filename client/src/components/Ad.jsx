import React from "react";
import { Modal } from "@mantine/core";

function Ad(props) {
  const { isAdOpen, setIsAdOpen } = props;

  return (
    <Modal
      centered
      opened={isAdOpen}
      onClose={() => setIsAdOpen(false)}
      transitionDuration={600}
      overlayOpacity={0.5}>
      <h3>Advertizement</h3>
    </Modal>
  );
}

export default Ad;
