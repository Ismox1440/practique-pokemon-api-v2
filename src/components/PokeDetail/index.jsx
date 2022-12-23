import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Badge,
  Progress,
  Box,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  ScaleFade,
  SkeletonText,
  Skeleton,
} from "@chakra-ui/react";

import { useGetMoreDetailsQuery } from "../../store/api/pokeapi";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const SplitWithImage = () => {
  const btnRef = React.useRef(null);
  const [scrollBehavior] = React.useState("inside");
  const { name } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isFetching } = useGetMoreDetailsQuery(
    `https://pokeapi.co/api/v2/pokemon/${name}`
    );

  const createStat = (name, number) => {
    return (
      <Box key={name}>
        <Flex justify={"space-between"}>
          <Text>{name}</Text>
          <Text>{number}</Text>
        </Flex>
        <Progress value={number} size="xs" colorScheme="cyan" />
      </Box>
    );
  };
  const createBadge = (type, key) => {
    const badgeType = (color) => {
      return (
        <Badge key={key}
          fontSize="md"
          colorScheme="rgb(240, 80, 0)"
          bgColor={color}
          color="white"
          opacity="0.80"
        >
          {type}
        </Badge>
      );
    };
    switch (type) {
      case "normal":
        return badgeType("rgb(168, 160, 144)");

      case "fighting":
        return badgeType("rgb(160, 80, 56)");

      case "flying":
        return badgeType("rgb(152, 168, 240)");

      case "poison":
        return badgeType("rgb(176, 88, 160)");

      case "ground":
        return badgeType("rgb(234, 214, 164)");

      case "rock":
        return badgeType("rgb(184, 160, 88)");

      case "bug":
        return badgeType("rgb(168, 184, 32)");

      case "ghost":
        return badgeType("rgb(96, 96, 176)");

      case "steel":
        return badgeType("rgb(168, 168, 192)");

      case "fire":
        return badgeType("rgb(240, 80, 0)");

      case "water":
        return badgeType("rgb(56, 153, 248)");

      case "grass":
        return badgeType("rgb(120, 200, 80)");

      case "electric":
        return badgeType("rgb(248, 208, 48)");

      case "psychic":
        return badgeType("rgb(248, 112, 160)");

      case "ice":
        return badgeType("rgb(88, 200, 224)");

      case "dragon":
        return badgeType("rgb(160, 80, 56)");

      case "dark":
        return badgeType("black");

      case "fairy":
        return badgeType("rgb(231, 159, 231)");
    }
  };

  


  return (
    <Container maxW={{ md: "90%", lg: "70%" }} py={12}>
     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Flex gap={"2"}>
            <Button
              onClick={() => navigate(-1)}
              leftIcon={<ArrowBackIcon />}
              colorScheme="cyan"
              variant="outline"
            >
              Go back
            </Button>

         
          </Flex>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            ID: {data && data.id}
          </Text>

         <Heading>
            {data ? data.name.charAt(0).toUpperCase() + data.name.slice(1) : <SkeletonText />}
          </Heading>
          <Flex gap={"5"}>
            {data && data.types.map((t, i) => createBadge(t.type.name, i))}
          </Flex>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={2}
            mt={"2"}
            justifyContent={"center"}
          >
            {data ? <Tag>
              <Box gap={10} p="1">
                <Text>Weight </Text>
                <Text> {data.weight} lbs</Text>
              </Box>
            </Tag> : <SkeletonText />}
            {data ? <Tag>
              <Box gap={10} p="1">
                <Text>Height </Text>
                <Text>{data && data.height}"</Text>
              </Box>
            </Tag> : <SkeletonText />}

            {data && data.abilities.map((a, index) => {
              return (
                <Tag key={index}>
                  <Box gap={10} p="1">
                    <Text>Ability {index + 1}</Text>
                    <Text>
                      {a.ability.name.charAt(0).toUpperCase() +
                        a.ability.name.slice(1)}
                    </Text>
                  </Box>
                </Tag>
              );
            })}
          </SimpleGrid>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            {data && data.stats.map((stat) =>
              createStat(stat.stat.name.toUpperCase(), stat.base_stat)
            )}
          </Stack> 
          <>
            {data ? <Button mt={3} ref={btnRef} onClick={onOpen}>
              Moves
            </Button> : <SkeletonText />}

            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={scrollBehavior}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Moves</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <SimpleGrid column={5} minChildWidth={100} gap={2}>
                    {data && data.moves.map((t, index) => (
                      <Button key={index}>{t.move.name}</Button>
                    ))}
                  </SimpleGrid>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </Stack>

        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <ScaleFade initialScale={0.1} in={!isFetching}>
            {data && <Image
              rounded={"md"}
              alt={"pokemon"}
              src={
                data?.sprites?.other?.home?.front_default
                  ? data.sprites.other.home.front_default
                  : data.sprites.other["official-artwork"].front_default
                  ? data.sprites.other["official-artwork"].front_default
                  : data.sprites.front_default
                  ? data.sprites.front_default
                  : "https://assets.stickpng.com/images/5a4613ddd099a2ad03f9c994.png"
              }
              objectFit={"cover"}
            />}
          </ScaleFade>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

export default SplitWithImage
