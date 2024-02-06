import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { observer } from "mobx-react";
import { formatters } from "../../resources/formatters";

interface IProps {
    label: string;
    data?: string;
    isWpp?: boolean;
}

const DetailsRow: React.FC<IProps> = observer(({ label, data, isWpp }) => {
    return (
        <Flex
            flexDir="column"
            gap={2}
            w="100%"
            borderBottom="1px solid"
            borderColor="teal.200"
            p={2}
        >
            <Text
                fontSize={22}
                fontWeight="bold"
                fontFamily={"'Bai Jamjuree', sans-serif"}
            >
                {label}
            </Text>
            {isWpp ? (
                <Link
                    fontSize={18}
                    href={`https://api.whatsapp.com/send?phone=${formatters.onlyNumbers(
                        data || ""
                    )}`}
                >
                    {data}
                </Link>
            ) : (
                <Text fontSize={18}>{data}</Text>
            )}
        </Flex>
    );
});

export { DetailsRow };
