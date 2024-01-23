import React from "react";
import {
    TableContainer,
    Tr,
    Thead,
    Th,
    Td,
    Table,
    Tbody,
    Flex,
    Text,
} from "@chakra-ui/react";
import { ImExit } from "react-icons/im";
import { RxEnter } from "react-icons/rx";
import { MdOutlineDelete } from "react-icons/md";
import { LuPen } from "react-icons/lu";

const mockScheduler = [
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
    {
        entryDay: "13/05/2024",
        exitDay: "13/05/2024",
        schedulerDay: "13/05/2024 - 00:45:52",
    },
];

const SchedulerTable: React.FC = () => {
    const headers = ["Agendado em:", "Data de entrada", "Data de saída", ""];
    return (
        <TableContainer
            border="1px solid #2B60D73D"
            borderRadius="8px"
            h={500}
            w="100%"
            overflowY="auto"
            boxShadow="md"
        >
            <Table variant="simple">
                <Thead bg="primary.100" py={5} h={58}>
                    <Tr>
                        {headers.map((item, index) => (
                            <Th
                                borderRight={
                                    item === "Agendado em:"
                                        ? "1px solid white"
                                        : "none"
                                }
                                borderBottom="1px solid #2B60D73D"
                                textTransform="capitalize"
                                fontFamily="'Bai Jamjuree', sans-serif"
                                key={index + "k"}
                                fontSize={18}
                                color="white"
                                fontWeight={600}
                            >
                                {item}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody bg="white">
                    {mockScheduler.map((item, index) => (
                        <Tr key={index}>
                            <Td
                                fontWeight={400}
                                borderRight="1px solid"
                                borderColor="blackAlpha.100"
                            >
                                <Flex gap={2} alignItems="center">
                                    <Text>{item.schedulerDay}</Text>
                                </Flex>
                            </Td>
                            <Td fontWeight={400}>
                                <Flex alignItems="center" gap={1}>
                                    <RxEnter />
                                    <Text>{item.entryDay}</Text>
                                </Flex>
                            </Td>
                            <Td fontWeight={400} gap={1}>
                                <Flex alignItems="center">
                                    <ImExit />
                                    <Text>{item.exitDay}</Text>
                                </Flex>
                            </Td>
                            <Td>
                                <Flex gap={2} alignItems="center">
                                    <MdOutlineDelete
                                        size={20}
                                        cursor="pointer"
                                    />
                                    <LuPen size={15} cursor="pointer" />
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export { SchedulerTable };
