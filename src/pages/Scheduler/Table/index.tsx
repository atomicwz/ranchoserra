import React from "react";
import {
    Center,
    Button,
    Flex,
    useDisclosure,
    Collapse,
    Text,
    Switch,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SchedulerTable } from "../../../components/SchedulerTable";
import { IoIosSearch } from "react-icons/io";
import { observer, useLocalObservable } from "mobx-react";
import { useAuth } from "../../../auth";
import { useGlobalStore } from "../../../context";
import SchedulerStore from "../../../stores/SchedulerStore";
// import { FilterScheduler } from "../../../components/FilterScheduler";

const TableView: React.FC = observer(() => {
    const router = useNavigate();
    const [isChecked, setIsChecked] = React.useState<boolean | null>(null);
    const { user } = useAuth();
    const { isOpen, onToggle } = useDisclosure();
    const store = useLocalObservable(() => new SchedulerStore());

    const handleChange = () => {
        if (isChecked) {
            setIsChecked(null);
            return;
        }
        setIsChecked(true);
    };

    const { dialog } = useGlobalStore();

    const onGoToEdit = (id: string) => {
        router(`/inicio/agendar/${id}`);
    };
    const onGoToDetails = (id: string) => {
        router(`/inicio/detalhes/${id}`);
    };

    const openDialog = (id: string) => {
        dialog.showDialog({
            title: "Apagar Agendamento",
            closeOnOverlayClick: true,
            description:
                "Tem certeza que deseja apagar? Esta ação não poderá ser desfeita.",
            buttons: [
                {
                    title: "Confirmar",
                    onPress: () => {
                        store.deleteScheduler(
                            user?.access_token as string,
                            id,
                            () =>
                                store.getSchedulers(
                                    user?.access_token as string,
                                    isChecked
                                )
                        );
                        dialog.closeDialog();
                    },
                    buttonProps: {
                        bg: "red.500",
                        height: "64px",
                        _hover: {
                            opacity: 0.8,
                        },
                    },
                },
                {
                    title: "Cancelar",
                    onPress: () => dialog.closeDialog(),
                    outlined: true,
                    buttonProps: {
                        color: "black",
                        rounded: "md",
                        height: "64px",
                        border: "2px solid",
                        borderColor: "black",
                        _hover: {
                            bg: "primary.300",
                        },
                    },
                },
            ],
        });
    };

    React.useEffect(() => {
        store.getSchedulers(user?.access_token as string, isChecked);
    }, [isChecked]);

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
                    {/* <FilterScheduler /> */}
                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="finishedAppointments" mb="0">
                            Finalizados?
                        </FormLabel>
                        <Switch
                            id="finishedAppointments"
                            colorScheme="teal"
                            size="lg"
                            isChecked={isChecked!}
                            onChange={handleChange}
                        />
                    </FormControl>
                </Collapse>
                <SchedulerTable
                    scheduler={store.schedulerList}
                    isLoading={store.loader}
                    onDelete={openDialog}
                    onEdit={onGoToEdit}
                    onDetails={onGoToDetails}
                />
                <Button
                    mx="auto"
                    variant="blue"
                    w="max-content"
                    boxShadow="md"
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
});

export default TableView;
