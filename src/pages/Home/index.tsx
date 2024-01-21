import React from "react";
import { Center, Heading, Image } from "@chakra-ui/react";

const Home: React.FC = () => {
    return (
        <Center h="100vh" bg="primary.300" p={2} flexDirection="column">
            <Image
                src="/planeta-terra.png"
                w={82}
                alt="Logo"
                mx="auto"
                mb={10}
            />
            <Heading>Bem vindo, Cristiano Ronaldo!</Heading>
        </Center>
    );
};

export default Home;
