import moment from "moment";

const formatters = {
    mask: (v: string) => {
        v = v.replace(/\D/g, "");

        if (v.length <= 11) {
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        } else {
            v = v.replace(/^(\d{2})(\d)/, "$1.$2");
            v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
            v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
            v = v.replace(/(\d{4})(\d)/, "$1-$2");
        }
        console.log(v);
        return v;
    },
    onlyNumbers: (numero: string) => {
        numero = numero.replace(/\D/g, "");
        return numero;
    },
    formatPhoneNumber: (value: string) => {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");

        return value;
    },
    date: (date: Date | null | undefined) =>
        `${moment(date).format("DD/MM/YYYY")}`,
};

export { formatters };
