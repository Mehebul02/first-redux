export interface ITask {
    id: string;
    title: string;
    description: string;
    duaDate: string;
    isCompleted: boolean;
    priority: "high" | "medium" | "low";
    assignedTo: string | null
}



export interface IUser {
    name: string,
    id: string,

}
