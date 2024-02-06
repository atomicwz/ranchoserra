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
} from "@chakra-ui/react";
import { ImExit } from "react-icons/im";
import { RxEnter } from "react-icons/rx";
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
}

const SchedulerTable: React.FC<IProps> = observer(
    ({ scheduler, onDelete, isLoading, onEdit }) => {
        const headers = [
            "Nome do Cliente",
            "Data de entrada",
            "Data de saída",
            "",
        ];
        return (
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
                                                onClick={() => onEdit(item._id)}
                                            />
                                        </Flex>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                )}
            </TableContainer>
        );
    }
);

export { SchedulerTable };
