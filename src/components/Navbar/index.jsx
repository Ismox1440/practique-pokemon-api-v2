import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  SimpleGrid,
} from "@chakra-ui/react";

import { setFilterAction } from "../../store/slices/navigation/actions";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/slices/navigation";
import Search from "./Search";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import AlertPortfolio from "../AlertPortfolio";

export default function WithSubnavigation() {
  const location = useLocation();
  const navigaton = useSelector((s) => s.navigation);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const setFilter = (filter, type = "type") => {
    dispatch(setFilterAction(type, filter));
    dispatch(setPage(0));
  };
  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
  ];

  return (
    <>
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        w="full"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        width="full"
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
          <NavLink to={"/"}>
            <Text
              bgGradient="linear(to-l, #00d4ff, #01acd0)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              PokeApi
            </Text>
          </NavLink>
        </Flex>
        <Stack
          justifyContent={"center"}
          alignItems="center"
          direction={"row"}
          spacing={4}
        >
          <Search />
          {location.pathname === "/" && <Button onClick={onOpen}>Types</Button>}
        </Stack>
      </Flex>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Types</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid column={5} minChildWidth={100} gap={2}>
              <Button
                isActive={!navigaton.filter}
                onClick={() => setFilter(0, false)}
              >
                all
              </Button>
              {types.map((t, index) => (
                <Button
                key={index}
                  isActive={navigaton.filterNumber === index + 1}
                  onClick={() => setFilter(index + 1)}
                >
                  {t}
                </Button>
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    <AlertPortfolio />
    </>
  );
}
