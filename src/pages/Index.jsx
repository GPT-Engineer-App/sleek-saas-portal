import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Flex, Icon } from "@chakra-ui/react";
import { FaCheck, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Flex align="center" mb={4}>
        <Icon as={icon} mr={4} w={8} h={8} />
        <Heading fontSize="xl">{title}</Heading>
      </Flex>
      <Text mt={4}>{text}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      <Box bg="purple.600" color="white" py={20}>
        <Box maxW="6xl" mx="auto" px={4}>
          <Heading as="h1" size="2xl" mb={4}>
            Supercharge Your Business
          </Heading>
          <Text fontSize="xl" mb={8}>
            Our SaaS platform provides the tools you need to scale your business efficiently.
          </Text>
          <Button size="lg" colorScheme="white" bg="white" color="purple.600">
            Get Started
          </Button>
        </Box>
      </Box>

      <Box maxW="6xl" mx="auto" mt={20} px={4}>
        <Flex mb={20} align="center">
          <Box mr={10}>
            <Heading as="h2" size="xl" mb={4}>
              Powerful Features
            </Heading>
            <Text fontSize="lg">Leverage our suite of features to streamline your operations and boost productivity.</Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzExNzU4NzEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature" />
        </Flex>

        <Stack spacing={8} direction={["column", "row"]}>
          <Feature icon={FaRocket} title="Fast Setup" text="Get up and running in minutes with our intuitive onboarding process." />
          <Feature icon={FaChartLine} title="Insightful Analytics" text="Gain valuable insights into your key metrics and make data-driven decisions." />
          <Feature icon={FaUsers} title="Collaboration Tools" text="Foster teamwork and improve communication with our built-in collaboration features." />
        </Stack>
      </Box>

      <Box bg="gray.100" mt={20} py={20}>
        <Box maxW="6xl" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Trusted by Top Companies
          </Heading>
          <Flex justify="center">
            <Image src="https://images.unsplash.com/photo-1707330069618-0dff8e80a6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMDF8ZW58MHx8fHwxNzExNzU4NzEzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Company 1 Logo" mx={4} h={10} />
            <Image src="https://images.unsplash.com/photo-1562654501-9a587e8638d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMDJ8ZW58MHx8fHwxNzExNzU4NzEzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Company 2 Logo" mx={4} h={10} />
            <Image src="https://images.unsplash.com/photo-1562654501-9a587e8638d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMDN8ZW58MHx8fHwxNzExNzU4NzEzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Company 3 Logo" mx={4} h={10} />
          </Flex>
        </Box>
      </Box>

      <Box maxW="6xl" mx="auto" my={20} px={4} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Ready to Get Started?
        </Heading>
        <Text fontSize="lg" mb={8}>
          Take your business to the next level with our powerful SaaS platform.
        </Text>
        <Button size="lg" colorScheme="purple">
          Start Free Trial
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
