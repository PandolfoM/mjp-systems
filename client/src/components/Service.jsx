import { SimpleGrid } from "@mantine/core";
import React from "react";

function Service() {
  return (
    <>
      <div id="services" className="service-container">
        <h2>Our Services</h2>
        <SimpleGrid
          className="service-grid"
          cols={3}
          spacing={"xl"}
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}>
          <div>
            <h3>IT Support</h3>
            <ul>
              <li>IT Consulting Service</li>
              <li>Managed IT Support</li>
              <li>On-Site Support</li>
              <li>Procurement Services</li>
              <li>IT Assessment</li>
              <li>Remote Support</li>
            </ul>
          </div>
          <div>
            <h3>Cloud Services</h3>
            <ul>
              <li>Cloud Servers & Desktops</li>
              <li>Hosted Exchange</li>
              <li>Office 365</li>
              <li>Online Backups</li>
              <li>Managed Antivirus</li>
              <li>Email Encryption</li>
              <li>File Sharing</li>
            </ul>
          </div>
          <div>
            <h3>Disaster Recovery</h3>
            <ul>
              <li>On-Site & Online Backups</li>
              <li>Malware Removal</li>
              <li>Computer Repair Services</li>
              <li>Data Recovery</li>
            </ul>
          </div>
          <div>
            <h3>Procurement Services</h3>
            <ul>
              <li>Hardware</li>
              <li>Software</li>
              <li>Peripherals</li>
              <li>Mobile Devices</li>
            </ul>
          </div>
          <div>
            <h3>Network Solutions</h3>
            <ul>
              <li>Server Deployments</li>
              <li>Desktop Support</li>
              <li>Firewall Services</li>
              <li>Wireless Installations</li>
              <li>Mobile Device Management</li>
            </ul>
          </div>
          <div>
            <h3>Video Surveillance</h3>
            <ul>
              <li>DVR & NVR Installations</li>
              <li>IP Video Products</li>
            </ul>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
}

export default Service;
