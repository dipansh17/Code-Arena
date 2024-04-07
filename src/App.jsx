import { Box, Heading } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Heading as="h1" mb={6} size="lg">
        CODEARENA
      </Heading>
      <CodeEditor />
    </Box>
  );
}

export default App;
