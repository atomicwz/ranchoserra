import React from "react";
import { Center, Heading, Image, keyframes } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading: React.FC = () => {
    const router = useNavigate();
    React.useEffect(() => {
        setTimeout(() => {
            router("/login");
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Center h="100vh" bg="primary.300" p={2} flexDirection="column">
            <Image
                src="/planeta-terra.png"
                animation={`${rotateAnimation} 7s linear infinite`}
                w={82}
                alt="Logo"
                mx="auto"
                mb={10}
            />
            <Heading>Aguarde...</Heading>
        </Center>
    );
};

export default Loading;
