import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState{
    task:ITask[]
}

const initialState:InitialState = {
    task:[ 
        {
        id: '1',
        title: 'Task is the management of the work',
        description: "task is the management of the work",
        duaDate: '2025-01-03',
        isCompleted: false,
        priority: "High"
    },
        {
        id: '2',
        title: 'Task is the management of the work',
        description: "task is the management of the work",
        duaDate: '2025-01-03',
        isCompleted: false,
        priority: "High"
    },
        {
        id: '3',
        title: 'Task is the management of the work',
        description: "task is the management of the work",
        duaDate: '2025-01-03',
        isCompleted: false,
        priority: "High"
    },
]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})


export default taskSlice.reducer