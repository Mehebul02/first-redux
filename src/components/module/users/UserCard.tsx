
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";
interface IProps{
    user:IUser
}
const UserCard = ({user}:IProps) => {
    return (
        <div>
             <div className="grid grid-cols-3 gap-4">
               <div className="border px-5 py-3 rounded-md ">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">

                            <h1 className=''>
                                {user.name}

                            </h1>
                        </div>
                        <Button  variant="link" className="p-0 text-red-500">
                        <Trash2 />
                    </Button>
                    </div>

                </div>
               </div>
        </div>
    );
};

export default UserCard;