/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { observer, useLocalObservable } from "mobx-react";
import SchedulerStore from "../../../stores/SchedulerStore";
import { useAuth } from "../../../auth";
import { DetailsRow } from "../../../components/DetailsRow";
import { formatters } from "../../../resources/formatters";

const Details: React.FC = observer(() => {
    const { user } = useAuth();
    const { id } = useParams();
    const store = useLocalObservable(() => new SchedulerStore());
    const router = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
            await store.getSchedulerById(user?.access_token as string, id!);
        };
        fetchData();
    }, [store]);

    return (
        <Center
            h={{ base: "unset", md: "100vh" }}
            bg="primary.300"
            p={2}
            flexDirection="column"
        >
            <Flex
                bg="white"
                boxShadow="md"
                flexDirection="column"
                p={5}
                gap={5}
                w={{ base: "95%", md: "60%", lg: "30%" }}
                border="1px solid"
                borderColor="teal.200"
            >
                <Image src="/logo.svg" w={82} alt="Logo" mx="auto" />
                <Heading textAlign="center">Detalhes da hospedagem</Heading>
                <Flex direction="column" gap={10}>
                    <DetailsRow label="Nome" data={store.scheduler?.name} />
                    <DetailsRow
                        label="CPF"
                        data={formatters.cpf(store.scheduler?.document || "")}
                    />
                    <DetailsRow
                        label="Número"
                        isWpp
                        data={formatters.formatPhoneNumber(
                            store.scheduler?.phone || ""
                        )}
                    />
                    <Flex gap={10}>
                        <DetailsRow
                            label="Check-In"
                            data={formatters.date(store.scheduler?.checkInDate)}
                        />
                        <DetailsRow
                            label="Check-Out"
                            data={formatters.date(
                                store.scheduler?.checkOutDate
                            )}
                        />
                    </Flex>
                </Flex>
            </Flex>
            <Button
                variant="outline"
                w="max-content"
                _hover={{
                    color: "primary.100",
                }}
                mt={5}
                border="none"
                onClick={() => router("/inicio")}
            >
                Voltar ao início
            </Button>
        </Center>
    );
});

export default Details;
