import { makeAutoObservable } from "mobx";
import { axiosInstance } from "../resources/api";
import { SchedulerSchema } from "../pages/Scheduler/CreateOrEdit";
import { showErrorToast, showSuccessToast } from "../resources/toast";
import { Dates, Scheduler } from "../resources/interfaces";

export default class SchedulerStore {
    public loader = false;
    public schedulerList: Scheduler[] = [];
    public dates: Dates[] = [];
    public blockedDates: Date[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public createScheduler = async (
        data: SchedulerSchema,
        token: string,
        onSuccess: () => void
    ) => {
        this.loader = true;
        try {
            await axiosInstance(token).post("/rentals", { ...data });
            showSuccessToast("Agendamento criado!");
            onSuccess();
        } catch (error: any) {
            showErrorToast(error.response.data.error.message[0]);
        } finally {
            this.loader = false;
        }
    };

    public getSchedulers = async (token: string) => {
        this.loader = true;
        try {
            const request = await axiosInstance(token).get<Scheduler[]>(
                "/rentals"
            );
            this.schedulerList = request.data;
        } catch (error: any) {
            showErrorToast(error.response.data.error.message[0]);
        } finally {
            this.loader = false;
        }
    };

    public getAllDates = async (token: string) => {
        this.loader = true;
        try {
            const request = await axiosInstance(token).get("/rentals/dates");
            this.dates = await request.data;
            const allDates = this.dates.flatMap((dateObj) => dateObj.dates);
            this.blockedDates = allDates.map((item) => new Date(item));
        } catch (error: any) {
            showErrorToast(error.response.data.error.message[0]);
        } finally {
            this.loader = false;
        }
    };

    public deleteScheduler = async (
        token: string,
        id: string,
        onSuccess: () => void
    ) => {
        this.loader = true;
        try {
            await axiosInstance(token).delete(`/rentals/${id}`);
            onSuccess();
        } catch (error: any) {
            showErrorToast(error.response.data.error.message[0]);
        } finally {
            this.loader = false;
        }
    };
}
