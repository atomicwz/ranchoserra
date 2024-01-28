import axios from "axios";

const BASE_URL = "https://space-tracker-api.vercel.app";

const axiosInstance = (token: string | null) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export { BASE_URL, axiosInstance };
