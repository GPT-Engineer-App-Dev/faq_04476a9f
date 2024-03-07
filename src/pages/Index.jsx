import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" pt={10}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is React?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How do I install Chakra UI?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can install Chakra UI by running <Text as="code">npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion</Text> in your React project directory.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is an accordion in web design?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>An accordion is a graphical control element that allows users to hide or reveal sections of content. It's commonly used for handling large amounts of content that can be toggled to display or hide.</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I use Chakra UI with other libraries?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Yes, Chakra UI is designed to be composable and can be used alongside many other JavaScript libraries and frameworks.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Index;
