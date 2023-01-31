import { SimpleGrid } from "@mantine/core";
import React from "react";

function Benefits() {
  return (
    <>
      <div id="benefits" className="benefits-container">
        <h2>Benefits of Managed Services</h2>
        <SimpleGrid
          className="benefits-grid"
          cols={4}
          spacing={"xl"}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}>
          <div>
            <h3>Predictable Cost</h3>
            <p>
              Our Managed Services is an affordable monthly fee per devices,
              there are no contracts or term limits. Simply increase or decrease
              your services as needed. This eliminates the burden of managing
              multiple yearly subscriptions that most likely have staggered
              renewal dates. Many small businesses are paying for services that
              aren't being used or are missing security software from some
              devices.
            </p>
          </div>
          <div>
            <h3>Increased Security</h3>
            <p>
              Security threats are a constant threat to businesses. Most small
              business might have some sort of security protection in place but
              most likely are missing several other critical features. Managed
              Services provides your best protection to mitigate those risks.
              Protect your at home and remote workers while they are not covered
              under the office network. Protect your company data as employees
              work from unknown locations or public WIFI's .
            </p>
          </div>
          <div>
            <h3>New Technologies</h3>
            <p>
              Managed Services provides you with updated technologies. Since our
              services are month-to-month, there are no subscriptions for any
              software services. Your devices can be upgraded to new
              technologies faster to improve security. One major benefit of
              Managed Services is the constant access to up-to-date
              technologies. You won't have to worry about outdated systems or
              purchasing services that don't pan out.
            </p>
          </div>
          <div>
            <h3>IT Experts</h3>
            <p>
              Small and medium-sized businesses often lack an IT department. In
              such cases, a staff member may take up the responsibility of IT
              needs. This may lead to missing critical functions which may
              compromise the security of the company. Managed Services frees up
              staff and allows them to focus on their primary roles.
            </p>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
}

export default Benefits;
