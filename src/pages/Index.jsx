import { useState } from "react";
import { Container, VStack, Textarea, Button, useToast, Heading } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const Index = () => {
  const [note, setNote] = useState("");
  const toast = useToast();

  const handleSave = () => {
    // Simulate saving to a backend or local storage
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    localStorage.setItem("notes", JSON.stringify([...existingNotes, note]));
    toast({
      title: "Note saved successfully.",
      description: "Your note has been saved.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setNote(""); // Clear the textarea after saving
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Minimal Note Taker
        </Heading>
        <Textarea placeholder="Type your note here..." value={note} onChange={(e) => setNote(e.target.value)} size="lg" height="200px" />
        <Button leftIcon={<FaSave />} colorScheme="teal" onClick={handleSave} isDisabled={!note}>
          Save Note
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
