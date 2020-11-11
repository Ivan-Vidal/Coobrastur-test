export interface Register {
    name: string;
    job: string;
    token?:string;
    user?:{
        name?: string;
    }
}