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
    Center,
    Spinner,
    Tooltip,
} from "@chakra-ui/react";
import { ImExit } from "react-icons/im";
import { RxEnter } from "react-icons/rx";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { LuPen } from "react-icons/lu";
import { Scheduler } from "../../resources/interfaces";
import { observer } from "mobx-react";
import { formatters } from "../../resources/formatters";

interface IProps {
    scheduler: Scheduler[];
    isLoading: boolean;
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
    onDetails: (id: string) => void;
}

const SchedulerTable: React.FC<IProps> = observer(
    ({ scheduler, onDelete, isLoading, onEdit, onDetails }) => {
        const headers = [
            "Nome do Cliente",
            "Data de entrada",
            "Data de saída",
            "Data de Agendamento",
            "",
        ];
        return (
            <>
                <Flex
                    gap={5}
                    justifyContent="right"
                    pr={4}
                    alignContent="center"
                >
                    <Flex gap={2}>
                        <MdOutlineDelete size={20} cursor="pointer" />
                        <Text>Apagar</Text>
                    </Flex>
                    <Flex gap={2}>
                        <LuPen size={15} cursor="pointer" />
                        <Text>Editar</Text>
                    </Flex>
                    <Flex gap={2}>
                        <AiOutlineFileSearch size={17} cursor="pointer" />
                        <Text>Ver detalhes</Text>
                    </Flex>
                </Flex>
                <TableContainer
                    border="1px solid #2B60D73D"
                    borderRadius="8px"
                    h={500}
                    w="100%"
                    overflowY="auto"
                    boxShadow="md"
                    bg="white"
                >
                    {isLoading ? (
                        <Center h="100%">
                            <Spinner size="xl" color="primary.100" />
                        </Center>
                    ) : (
                        <Table variant="striped">
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
                            <Tbody>
                                {scheduler.map((item, index) => (
                                    <Tr key={index}>
                                        <Td
                                            fontWeight={400}
                                            borderRight="1px solid"
                                            borderColor="blackAlpha.100"
                                        >
                                            <Flex gap={2} alignItems="center">
                                                <Text>{item.name}</Text>
                                            </Flex>
                                        </Td>
                                        <Td fontWeight={400}>
                                            <Flex alignItems="center" gap={1}>
                                                <RxEnter />
                                                <Text>
                                                    {formatters.date(
                                                        item.checkInDate
                                                    )}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td fontWeight={400} gap={1}>
                                            <Flex alignItems="center">
                                                <ImExit />
                                                <Text>
                                                    {formatters.date(
                                                        item.checkOutDate
                                                    )}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td fontWeight={400} gap={1}>
                                            <Flex alignItems="center">
                                                <Text>
                                                    {formatters.date(
                                                        item.createdAt
                                                    )}
                                                </Text>
                                            </Flex>
                                        </Td>
                                        <Td>
                                            <Flex gap={2} alignItems="center">
                                                <MdOutlineDelete
                                                    onClick={() =>
                                                        onDelete(item._id)
                                                    }
                                                    size={20}
                                                    cursor="pointer"
                                                />
                                                <LuPen
                                                    size={15}
                                                    cursor="pointer"
                                                    onClick={() =>
                                                        onEdit(item._id)
                                                    }
                                                />
                                                <AiOutlineFileSearch
                                                    size={17}
                                                    cursor="pointer"
                                                    onClick={() =>
                                                        onDetails(item._id)
                                                    }
                                                />
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    )}
                </TableContainer>
            </>
        );
    }
);

export { SchedulerTable };
