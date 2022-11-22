import { AppShell } from "@mantine/core";
import Nav from "../components/Nav";

function Home() {
  return <AppShell padding={"md"} header={<Nav />}></AppShell>;
}

export default Home;
