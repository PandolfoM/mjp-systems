import {
  faCloudArrowUp,
  faDownload,
  faEnvelope,
  faHeadset,
  faLaptop,
  faNetworkWired,
  faServer,
  faShieldVirus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SimpleGrid } from "@mantine/core";
import React from "react";

function Services() {
  return (
    <div className="services-container">
      <h2>
        Managed Services provides <br /> multiple functions for your business,
        such as:
      </h2>
      <SimpleGrid
        className="services-grid"
        cols={4}
        spacing={"xl"}
        breakpoints={[{ maxWidth: 980, cols: 2, spacing: "md" }]}>
        <div>
          <FontAwesomeIcon icon={faCloudArrowUp} size="3x" />
          <p>Data Backup</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeadset} size="3x" />
          <p>IT Support</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faNetworkWired} size="3x" />
          <p>Network Security</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faShieldVirus} size="3x" />
          <p>Malware Protection</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faDownload} size="3x" />
          <p>Patch Management</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLaptop} size="3x" />
          <p>Device Management</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faServer} size="3x" />
          <p>Office 365 Management and Backups</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <p>Email Security Services</p>
        </div>
      </SimpleGrid>
    </div>
  );
}

export default Services;
