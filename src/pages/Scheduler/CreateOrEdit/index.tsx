import React from "react";
import {
    Button,
    Center,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Image,
    Input,
} from "@chakra-ui/react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatters } from "../../../resources/formatters";
import { observer, useLocalObservable } from "mobx-react";
import SchedulerStore from "../../../stores/SchedulerStore";
import { useAuth } from "../../../auth";

registerLocale("pt-BR", ptBR);

const schedulerSchema = z.object({
    name: z.string().min(1, { message: "É necessário preencher este campo." }),
    phone: z
        .string()
        .length(15, { message: "O número de telefone é inválido." }),
    document: z.string().length(14, { message: "O CPF não está correto." }),
    checkInDate: z.date(),
    checkOutDate: z.date(),
});

export type SchedulerSchema = z.infer<typeof schedulerSchema>;

const CreateOrEdit: React.FC = observer(() => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SchedulerSchema>({
        resolver: zodResolver(schedulerSchema),
    });
    const store = useLocalObservable(() => new SchedulerStore());
    setDefaultLocale("pt-BR");
    const router = useNavigate();

    const onSubmit = (data: SchedulerSchema) => {
        store.createScheduler(
            { ...data, document: formatters.onlyNumbers(data.document) },
            user?.access_token as string,
            () => router("/inicio/agendamentos")
        );
    };
    React.useEffect(() => {
        store.getAllDates(user?.access_token as string);
    }, []);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex gap={4} direction="column">
                        <FormControl isInvalid={!!errors.name}>
                            <FormLabel>Nome Completo:</FormLabel>
                            <Input
                                placeholder="Digite seu nome"
                                {...register("name")}
                            />
                            <FormErrorMessage>
                                {errors.name?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.phone}>
                            <FormLabel>Telefone:</FormLabel>
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                    <Input
                                        placeholder="75 99999-9999"
                                        maxLength={15}
                                        onChange={(e) => {
                                            const formatted =
                                                formatters.formatPhoneNumber(
                                                    e.target.value
                                                );
                                            field.onChange(formatted);
                                        }}
                                        value={field.value}
                                    />
                                )}
                            />
                            <FormErrorMessage>
                                {errors.phone?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={!!errors.document}>
                            <FormLabel>CPF:</FormLabel>
                            <Controller
                                control={control}
                                name="document"
                                render={({ field }) => (
                                    <Input
                                        placeholder="999.999.999-99"
                                        maxLength={14}
                                        onChange={(e) => {
                                            const formatted = formatters.mask(
                                                e.target.value
                                            );
                                            field.onChange(formatted);
                                        }}
                                        value={field.value}
                                    />
                                )}
                            />
                            <FormErrorMessage>
                                {errors.phone?.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Flex
                            justifyContent="space-between"
                            flexDirection={{ base: "column", md: "row" }}
                            gap={3}
                        >
                            <FormControl>
                                <FormLabel>
                                    Selecione a data de entrada:
                                </FormLabel>
                                <Controller
                                    control={control}
                                    name="checkInDate"
                                    render={({ field }) => (
                                        <DatePicker
                                            selected={field.value}
                                            onChange={(date) =>
                                                field.onChange(date)
                                            }
                                            dateFormat="dd/MM/yyyy"
                                            showYearDropdown
                                            customInput={
                                                <Input
                                                    isReadOnly
                                                    maxLength={10}
                                                    cursor="pointer"
                                                />
                                            }
                                            excludeDates={store.blockedDates}
                                        />
                                    )}
                                />
                                <FormErrorMessage>
                                    {errors.checkInDate?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl w="100%">
                                <FormLabel>
                                    Selecione a data de saída:
                                </FormLabel>
                                <Controller
                                    control={control}
                                    name="checkOutDate"
                                    render={({ field }) => (
                                        <DatePicker
                                            selected={field.value}
                                            onChange={(date) =>
                                                field.onChange(date)
                                            }
                                            dateFormat="dd/MM/yyyy"
                                            showYearDropdown
                                            customInput={
                                                <Input
                                                    w="100%"
                                                    maxLength={10}
                                                    cursor="pointer"
                                                />
                                            }
                                            excludeDates={store.blockedDates}
                                        />
                                    )}
                                />
                                <FormErrorMessage>
                                    {errors.checkOutDate?.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Flex>
                    </Flex>
                    <Button variant="blue" mt={5} type="submit">
                        Agendar
                    </Button>
                </form>
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
});

export default CreateOrEdit;
