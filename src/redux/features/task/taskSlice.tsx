import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[],
    filter: "All" | 'High' | 'Medium' | 'Low'
}

const initialState: InitialState = {
    tasks: [
        {
            id: '1',
            title: 'Task is the management of the work',
            description: "Task is the management of the work",
            duaDate: '2025-01-03',
            isCompleted: false,
            priority: "High"
        },
        {
            id: '2',
            title: 'Prepare presentation slides',
            description: "Create and finalize slides for the client meeting",
            duaDate: '2025-01-05',
            isCompleted: false,
            priority: "Medium"
        },
        {
            id: '3',
            title: 'Fix login page bug',
            description: "Resolve the issue causing login failures for some users",
            duaDate: '2025-01-07',
            isCompleted: true,
            priority: "High"
        },
        {
            id: '4',
            title: 'Team meeting',
            description: "Attend the weekly sync-up with the project team",
            duaDate: '2025-01-08',
            isCompleted: false,
            priority: "Low"
        },
        {
            id: '5',
            title: 'Submit monthly report',
            description: "Complete and submit the financial report for December",
            duaDate: '2025-01-10',
            isCompleted: false,
            priority: "High"
        },
        {
            id: '6',
            title: 'Update project documentation',
            description: "Add the latest changes and features to the project docs",
            duaDate: '2025-01-15',
            isCompleted: false,
            priority: "Medium"
        },
    ],
    filter: "High"
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer