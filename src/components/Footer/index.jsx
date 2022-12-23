import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillFolder } from "react-icons/ai";

import { ReactNode } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          💻 Desarrollado por{" "}
          <Link color={"cyan.500"} href="https://saragusti.ga/" isExternal>
            Ismael Saragusti
          </Link>
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/ismael-saragusti-664260213/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={"Github"} href={"https://github.com/Ismox1440"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"portfolio"} href={"https://saragusti.ga/"}>
            <AiFillFolder />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
