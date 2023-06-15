import { Stack } from "@mui/material";
import { Footer, Header } from "./components";
import { Form } from "./components/Form";
import { StepProvider } from "./provider";

export default function Home() {
  return (
    <StepProvider>
      <Stack component={"main"} justifyContent={"space-between"} height={"100vh"}>
        <Header />
        <Form />
        <Footer />
      </Stack>
    </StepProvider>
  )
}
