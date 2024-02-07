import React from "react";
import { Center, Heading, Image, keyframes } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth";

const Loading: React.FC = () => {
    const router = useNavigate();
    const { user } = useAuth();
    React.useEffect(() => {
        setTimeout(() => {
            if (user) return router("/inicio");
            router("/login");
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Center h="100vh" bg="primary.300" p={2} flexDirection="column">
            <Image src="/logo.svg" w={150} alt="Logo" mx="auto" mb={10} />
            <Heading>Aguarde...</Heading>
        </Center>
    );
};

export default Loading;
