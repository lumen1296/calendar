export interface Reminder {
    date: string;
    title: string;
    color: {
        color: string,
        name: string
    };
    city: string;
    time: string;
    foreCast: string;
}
