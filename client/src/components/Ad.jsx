import { Modal } from "@mantine/core";
import React, { useEffect, useState } from "react";

function Ad() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    return () => {
      let ranad = sessionStorage.getItem("ranad");
      if (ranad == null) {
        setTimeout(() => {
          setOpened(true);
        }, 1500);
      }
      sessionStorage.setItem("ranad", true);
    };
  }, []);

  return (
    <Modal
      centered
      opened={opened}
      onClose={() => setOpened(false)}
      withCloseButton={false}
      transitionDuration={600}
      overlayOpacity={0.35}
      overlayBlur={2}>
      <h3>Advertizement</h3>
    </Modal>
  );
}

export default Ad;
