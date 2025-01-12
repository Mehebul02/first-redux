import { RootState } from '@/redux/store';
import { IUser } from './../../../types';
import { createSlice, nanoid, PayloadAction, } from "@reduxjs/toolkit";

interface InitialState {
    users: IUser[]
}

const initialState: InitialState = {
    users: [
        {
            id: '1',
            name:'Mehebul Alif'
        }
    ],
}


type DraftUser = Pick<IUser, 'name'>

const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(), ...userData }
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload)
            state.users.push(userData)

        }
    }
})


export const selectUsers=(state:RootState)=>state.user.users

export const {addUser}= userSlice.actions

export default userSlice.reducer