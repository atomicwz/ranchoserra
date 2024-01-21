import React from "react";
import { Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { TextInput } from "../../components/TextInput";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
    const router = useNavigate();
    return (
        <Center h="100vh" bg="primary.300" p={2} flexDirection="column">
            <Flex
                flexDir="column"
                p={5}
                w={{ base: "95%", md: "60%", lg: 400 }}
                border="1px solid"
                borderColor="teal.200"
                bg="primary.400"
                gap={3}
            >
                <Heading textAlign="center" mx="auto">
                    Faça seu Login
                </Heading>
                <Image
                    src="/planeta-terra.png"
                    w={82}
                    alt="Logo"
                    mx="auto"
                    mb={10}
                />
                <TextInput label="Usuario:" />
                <TextInput label="Senha:" type="password" />
                <Button variant="blue" mt={5} onClick={() => router("/inicio")}>
                    Entrar
                </Button>
            </Flex>
            <Image
                src="/credits.svg"
                w={350}
                alt="Logo"
                mx="auto"
                mb={10}
                mt={10}
            />
        </Center>
    );
};

export default App;
