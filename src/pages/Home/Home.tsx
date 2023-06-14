import { Stack } from "@mui/material";
import { Footer, Header } from "./components";

export default function Home() {
  return (
    <Stack component={"main"} justifyContent={"space-between"} height={"100vh"}>
      <Header />
      <Footer />
    </Stack>
  )
}
