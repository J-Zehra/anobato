import { Flex, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import idk from "./assets/idk.jpg";

export const Programs = () => {
  const [hovered, setHovered] = useState(null);

  const programs = [
    {
      title: "BSIT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      bg: "rgba(60, 60, 60, .1)",
      fg: "rgba(70, 70, 70, .2)",
      heading: "orange",
      body: "rgba(0, 0, 0, .6)",
    },
    {
      title: "DICT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      bg: "rgba(255, 165, 0, .5)",
      fg: "rgba(255, 165, 0, .6)",
      heading: "rgba(0, 0, 0, .8)",
      body: "rgba(0, 0, 0, .6)",
    },
    {
      title: "DCET",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      bg: "rgba(0, 0, 0, .7)",
      fg: "rgba(0, 0, 0, .8)",
      heading: "white",
      body: "rgba(255, 255, 255, .7)",
    },
  ];

  return (
    <Grid
      h="100vh"
      w="100%"
      margin="auto"
      placeContent="center"
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(2, 1fr)"
    >
      {programs.map((item, index) => {
        return (
          <GridItem rowSpan={index === 0 ? 2 : 1}>
            <Flex
              bg={item.bg}
              w="100%"
              h="100%"
              justifyContent="center"
              alignItems="center"
              pos="relative"
              overflow="hidden"
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={idk}
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
                pos="absolute"
                opacity=".03"
                filter="blur(3px)"
                as={motion.img}
                animate={{
                  scale: hovered === index ? 1.5 : 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
              />
              <Text
                pos="absolute"
                fontWeight="black"
                fontSize="20rem"
                left="5rem"
                color={item.fg}
                opacity={0.2}
              >
                {index + 1}
              </Text>
              <VStack align="start" w="60%" margin="auto" zIndex={999}>
                <Text fontWeight="bold" fontSize="3.5rem" color={item.heading}>
                  {item.title}
                </Text>
                <Text fontWeight="normal" color={item.body}>
                  {item.description}
                </Text>
              </VStack>
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};
