/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from "mobx";
import { axiosInstance } from "../resources/api";
import { SchedulerSchema } from "../pages/Scheduler/CreateOrEdit";
import { showErrorToast, showSuccessToast } from "../resources/toast";
import { Dates, Scheduler } from "../resources/interfaces";

export default class SchedulerStore {
    public loader = false;
    public schedulerList: Scheduler[] = [];
    public scheduler: Scheduler | null = null;
    public dates: Dates[] = [];
    public blockedDates: Date[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public createScheduler = async (
        data: SchedulerSchema,
        token: string,
        onSuccess: () => void,
        id?: string
    ) => {
        this.loader = true;
        try {
            if (id) {
                await axiosInstance(token).patch(`/rentals/${id}`, { ...data });
                showSuccessToast("Agendamento Editado com sucesso!!");
                onSuccess();
            } else {
                await axiosInstance(token).post("/rentals", { ...data });
                showSuccessToast("Agendamento criado!");
                onSuccess();
            }
        } catch (error: any) {
            showErrorToast(error.response.data.error.message[0]);
        } finally {
            this.loader = false;
        }
    };

    public getSchedulers = async (
        token: string,
        isFinalized: boolean | null
    ) => {
        this.loader = true;
        try {
            const request = await axiosInstance(token).get<Scheduler[]>(
                "/rentals",
                {
                    params: {
                        finishedRent: isFinalized,
                    },
                }
            );
            this.schedulerList = request.data;
        } catch (error: any) {
            showErrorToast(error.response.data.error.message[0]);
        } finally {
            this.loader = false;
        }
    };

    public getSchedulerById = async (
        token: string,
        id: string
    ): Promise<Scheduler | void> => {
        this.loader = true;
        try {
            const request = await axiosInstance(token).get<Scheduler>(
                `/rentals/${id}`
            );
            return request.data;
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

    public setInitialValues = (data: Scheduler) => {
        this.scheduler = data;
    };
}
