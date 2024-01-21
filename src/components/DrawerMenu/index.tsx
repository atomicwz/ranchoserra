import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Link,
    Box,
    Flex,
} from "@chakra-ui/react";
import { GiNotebook } from "react-icons/gi";
import { MdAddBox } from "react-icons/md";

interface IProps {
    children: React.ReactNode;
}

const DrawerMenu: React.FC<IProps> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box onClick={onOpen}>{children}</Box>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                size="md"
            >
                <DrawerOverlay />
                <DrawerContent
                    color="teal.800"
                    bg="primary.300"
                    fontFamily="'Bai Jamjuree', sans-serif"
                >
                    <DrawerCloseButton />
                    <DrawerHeader color="teal.800" fontSize={32}>
                        Rancho Serra do Mucambo
                    </DrawerHeader>
                    <DrawerBody flexDirection="column">
                        <Flex fontSize={24} alignItems="center" mb={5} gap={1}>
                            <GiNotebook />
                            <Link>Listar Agendamentos</Link>
                        </Flex>
                        <Flex fontSize={24} alignItems="center" mb={5} gap={1}>
                            <MdAddBox />
                            <Link>Novo Agendamento</Link>
                        </Flex>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button
                            colorScheme="primary.100"
                            onClick={onClose}
                            color="teal.800"
                        >
                            Fechar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export { DrawerMenu };
