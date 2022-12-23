import React from "react";
import { useNavigate, useParams } from "react-router";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Page404 = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  return (
    <Box h={'100%'} textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          <CloseIcon boxSize={"20px"} color={"white"} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        404
      </Heading>
      <Text color={"gray.500"}>
        The page you are trying to access does not exist
      </Text>
      <Button onClick={() => navigate("/")} mt={"8"}>
        Back to homepage
      </Button>
    </Box>
  );
};

export default Page404;
