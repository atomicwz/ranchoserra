export interface Login {
    email: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    access_token: string;
}

export interface Scheduler {
    _id: string;
    name: string;
    document: string;
    createdAt: Date;
    phone: string;
    checkInDate: Date;
    checkOutDate: Date;
    dates: Date[];
}

export interface Dates {
    _id: string;
    dates: Date[];
}
