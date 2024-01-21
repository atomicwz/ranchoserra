import React from "react";
import { Input, Flex, Text } from "@chakra-ui/react";

interface IProps {
    label?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    type?: React.HTMLInputTypeAttribute;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    value?: string;
    maxLength?: number;
}

export const TextInput: React.FC<IProps> = ({
    label,
    onChange,
    placeholder,
    type,
    isReadOnly,
    isDisabled,
    value,
    maxLength,
}) => {
    return (
        <Flex flexDirection="column" gap={1}>
            <Text fontWeight={600} color="teal.800">
                {label}
            </Text>
            <Input
                maxLength={maxLength}
                isReadOnly={isReadOnly}
                isDisabled={isDisabled}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Flex>
    );
};
