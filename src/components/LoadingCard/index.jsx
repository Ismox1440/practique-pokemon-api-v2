import {
  Box,
  Center,
  Flex,
  useColorModeValue,
  SkeletonCircle,
  SkeletonText,
  ScaleFade,
} from "@chakra-ui/react";


export default function LoadingCard({isFetching}) {
  return (
    <ScaleFade initialScale={0.1} in={!isFetching}>
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
        ></Flex>

        <Flex justify={"center"} mt={-12} border>
          <SkeletonCircle size={"150px"} />
        </Flex>

        <Box p={6}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      </Box>
    </Center>
    </ScaleFade>
  );
}
