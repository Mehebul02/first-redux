import { IUser } from './../../../types';
import { createSlice, nanoid, } from "@reduxjs/toolkit";

interface InitialState{
   user:IUser[]
}

const initialState:InitialState={
    user:[]
}


type DraftUser =Pick<IUser,'name'>

const createUser = (userData:DraftUser):IUser=>{
    return {id:nanoid(), ...userData}
}

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        addUsers:(state.action:PayloadAction<IUser>)=>{
            const user = createUser(action.payload)
            state.Users.push(userData)

        }
    }
})