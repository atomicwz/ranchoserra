import React from "react";
import { Button, Center, Heading, Image } from "@chakra-ui/react";
import { DrawerMenu } from "../../components/DrawerMenu";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useAuth } from "../../auth";

const Home: React.FC = () => {
    const { user } = useAuth();
    return (
        <Center h="100vh" bg="primary.300" p={2} flexDirection="column">
            <Image
                src="/planeta-terra.png"
                w={82}
                alt="Logo"
                mx="auto"
                mb={10}
            />
            <Heading>Bem vindo,</Heading>
            <Heading textTransform="capitalize">{user?.username}</Heading>
            <DrawerMenu>
                <Button variant="blue" mt={10}>
                    Abrir Menu
                    <IoIosArrowRoundForward size={25} />
                </Button>
            </DrawerMenu>
        </Center>
    );
};

export default Home;
