import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  ScaleFade,
  SkeletonCircle,
  SkeletonText,
  Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGetMoreDetailsQuery } from "../../store/api/pokeapi";

export default function Card({ url }) {
  const { data, isFetching } = useGetMoreDetailsQuery(url);

  const toNormalCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

  function EllipsisText({ text, maxLength }) {
    return (
      <Text>
        {text.length > maxLength ? `${text.substring(0, maxLength)}...` : text}
      </Text>
    );
  }

  return (
    <ScaleFade initialScale={0.9} in={!isFetching}>
      <Link to={`/pokemon/${data?.name}`}>
        <Center pb={12}>
          <Box
            maxW={"270px"}
            h="410px"
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            _hover={{ boxShadow: "md" }}
            rounded={"md"}
            overflow={"hidden"}
            border="1px"
            borderColor="gray.200"
            transition="0.2s  ease-in-out"
          >
            <Flex
              h={"100px"}
              w="full"
              alignItems={"start"}
              justifyContent="space-between"
            >
              {data && (
                <Badge
                  ml={"2"}
                  mt={"2"}
                  fontSize={"sm"}
                  colorScheme={"white"}
                  color={"gray.400"}
                >
                  ID. {data.id}
                </Badge>
              )}
              {data && (
                <Badge fontSize="md" colorScheme={"green"}>
                  HP: {data.stats[0].base_stat}
                </Badge>
              )}
            </Flex>

            <Flex justify={"center"} mt={-12} border>
              {data?.sprites && !isFetching ? (
                <Image
                  size={"sm"}
                  boxSize="150px"
                  src={
                    data?.sprites?.other?.home?.front_default
                      ? data.sprites.other.home.front_default
                      : data.sprites.other["official-artwork"].front_default
                      ? data.sprites.other["official-artwork"].front_default
                      : data.sprites.front_default
                      ? data.sprites.front_default
                      : "https://assets.stickpng.com/images/5a4613ddd099a2ad03f9c994.png"
                  }
                  alt={"Pokemon"}
                />
              ) : (
                <SkeletonCircle size={"150px"} />
              )}
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={2}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {data ? (
                    EllipsisText({
                      text: toNormalCase(data.name),
                      maxLength: 16,
                    })
                  ) : (
                    <SkeletonText />
                  )}
                </Heading>
              </Stack>
              {data && (
                <Stack
                  mb={2}
                  alignItems={"center"}
                  justifyContent="center"
                  direction="row"
                >
                  {data.types.map((t, index) => {
                    return createBadge(t.type.name, index);
                  })}
                </Stack>
              )}

              <Stack direction={"row"} justify={"center"} spacing={6}>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>ATK</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {data && data.stats[1].base_stat}
                  </Text>
                </Stack>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>DEF</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    {data && data.stats[2].base_stat}
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Center>
      </Link>
    </ScaleFade>
  );
}
