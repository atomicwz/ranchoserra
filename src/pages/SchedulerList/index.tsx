import React from "react";
import {
    Center,
    Button,
    Flex,
    useDisclosure,
    Collapse,
    Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SchedulerTable } from "../../components/SchedulerTable";
import { FilterScheduler } from "../../components/FilterScheduler";
import { IoIosSearch } from "react-icons/io";

const SchedulerList: React.FC = () => {
    const router = useNavigate();
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Center h="100vh" bg="primary.300" p={2} flexDirection="column">
            <Flex
                mt={5}
                gap={5}
                flexDirection="column"
                w={{ md: "40%" }}
                mx="auto"
            >
                <Flex
                    justifyContent="space-between"
                    w="100%"
                    alignItems="cnter"
                >
                    <Button onClick={onToggle} variant="blue" w="max-content">
                        <Text color="white" mr={2}>
                            Filtrar
                        </Text>
                        <IoIosSearch size={25} />
                    </Button>
                    <Text fontFamily="'Bai Jamjuree', sans-serif" fontSize={24}>
                        Todos os agendamentos
                    </Text>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <FilterScheduler />
                </Collapse>
                <SchedulerTable />
                <Button
                    mx="auto"
                    variant="blue"
                    w="max-content"
                    onClick={() => router("/inicio/agendar")}
                >
                    Criar Agendamento
                </Button>
                <Button
                    mx="auto"
                    variant="outline"
                    w="max-content"
                    _hover={{
                        color: "primary.100",
                    }}
                    border="none"
                    onClick={() => router("/inicio")}
                >
                    Voltar ao início
                </Button>
            </Flex>
        </Center>
    );
};

export default SchedulerList;
