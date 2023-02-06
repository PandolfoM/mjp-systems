import React from "react";
import {
  ActionIcon,
  Affix,
  Button,
  Transition,
  UnstyledButton,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 10, right: 10 }}>
      <Transition transition={"slide-up"} mounted={scroll.y >= 100}>
        {(transitionStyles) => (
          <UnstyledButton
            title="Scroll to top"
            className="scroll-top-btn"
            variant="filled"
            radius={"xl"}
            size="xl"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}>
            <FontAwesomeIcon icon={faChevronUp} />
          </UnstyledButton>
        )}
      </Transition>
    </Affix>
  );
}

export default ScrollTop;
