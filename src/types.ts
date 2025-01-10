export interface ITask {
    id: string;
    title: string;
    description: string;
    duaDate: string; 
    isCompleted: boolean;
    priority: "high" | "medium" | "low"; 
}
