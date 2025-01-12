

import AddUser from "../module/users/AddUser";

import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";
import UserCard from "../module/users/UserCard";

const Users = () => {
    const users = useAppSelector(selectUsers)
    console.log(users);
    return (
        <div className="max-w-7xl mx-auto mt-6 space-y-5">
            <div className="flex justify-end items-center gap-3">
                <AddUser />
            </div>
            {/* user map  */}
            {
                users?.map((user)=>(
                    <UserCard user={user}/>
                ))

            }
        </div>
    );
};

export default Users;