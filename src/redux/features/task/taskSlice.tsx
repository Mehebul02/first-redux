import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[],
    filter: "all" | 'high' | 'medium' | 'low'
}

const initialState: InitialState = {
    tasks: [
        {
            id: '1',
            title: 'Task is the management of the work',
            description: "Task is the management of the work",
            duaDate: '2025-01-03',
            isCompleted: false,
            priority: "high",
            assignedTo: null
        }
    ],
    filter: "all"
}

type DraftTask = Pick<ITask, 'title' | 'description' | 'duaDate' | 'priority' | 'assignedTo'>

const createTask = (taskData: DraftTask): ITask => {
    return {...taskData , id: nanoid(), isCompleted: false, 
        assignedTo: taskData.assignedTo ? taskData.assignedTo : null, 
    }
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action)

            state.tasks.forEach((task) => task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task)

        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
            state.filter = action.payload
        }
    }
})

export const selectTasks = (state: RootState) => {

    const filter = state.todo.filter

    if (filter === 'low') {
        return state.todo.tasks.filter((task) => task.priority === 'low')
    } else if (filter === 'medium') {
        return state.todo.tasks.filter((task) => task.priority === 'medium')
    } else if (filter === 'high') {
        return state.todo.tasks.filter((task) => task.priority === 'high')
    } else {
        return state.todo.tasks
        }
        
            


}

export const selectFilter = (state: RootState) => {


    return state.todo.filter
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;
export default taskSlice.reducer