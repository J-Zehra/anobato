import { Flex, Text } from "@chakra-ui/react";
import bg from "./assets/bg.png";
import { Programs } from "./Programs";

function App() {
  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        bgImage={bg}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        flexDir="column"
      >
        <Text
          fontSize="16rem"
          fontWeight="black"
          color="orange"
          pos="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          iBITS
          <Text
            bottom="3rem"
            color="white"
            fontSize="1.26rem"
            fontWeight="bold"
            pos="absolute"
            margin="auto"
          >
            INSTITUTE OF BRILLIANT INFORMATION TECHNOLOGY STUDENT
          </Text>
        </Text>
      </Flex>
      <Programs />
    </>
  );
}

export default App;
