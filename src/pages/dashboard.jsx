import { Title } from "@mantine/core";
import React from "react";

import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Title order={1}>Dashboard</Title>
      </div>
    </div>
  );
}

export default Dashboard;
