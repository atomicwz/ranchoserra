import React from "react";
import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Input,
    Text,
} from "@chakra-ui/react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { useNavigate } from "react-router-dom";

registerLocale("pt-BR", ptBR);

const Scheduler: React.FC = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date("2024-01-01T08:30")
    );
    const router = useNavigate();
    setDefaultLocale("pt-BR");
    const excludeSpecificDates = [
        new Date("2024-01-25T08:30"),
        new Date("2024-02-11T08:30"),
        // Adicione mais datas que você deseja desabilitar
    ];
    return (
        <Center h="100vh" bg="primary.300" p={2} flexDirection="column">
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
                <Image src="/planeta-terra.png" w={82} alt="Logo" mx="auto" />
                <Heading textAlign="center">Agendar uma hospedagem</Heading>
                <Flex gap={1} direction="column">
                    <Text>Selecione a data de entrada:</Text>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        customInput={<Input isReadOnly cursor="pointer" />}
                        selected={selectedDate}
                        onChange={(date: Date) => {
                            setSelectedDate(date);
                        }}
                        excludeDates={excludeSpecificDates}
                    />
                </Flex>
                <Flex gap={1} direction="column">
                    <Text>Selecione a data de saída:</Text>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        customInput={<Input isReadOnly cursor="pointer" />}
                        selected={selectedDate}
                        onChange={(date: Date) => {
                            setSelectedDate(date);
                        }}
                        excludeDates={excludeSpecificDates}
                    />
                </Flex>
                <Button variant="blue" mt={5}>
                    Agendar
                </Button>
            </Flex>
            <Button
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
        </Center>
    );
};

export default Scheduler;
