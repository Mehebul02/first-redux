import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { deleteTask, toggleCompleteState } from '@/redux/features/task/taskSlice';
import { selectUsers } from '@/redux/features/user/userSlice';
import { useAppDispatch } from '@/redux/hook';
import { ITask } from '@/types';
import { Trash2 } from 'lucide-react';
import { useSelector } from 'react-redux';

interface IProps {
    task: ITask
}

const TasksCard = ({ task }: IProps) => {

    const users = useSelector(selectUsers)

    const assignedUser = users.find(user=> user.id === task.assignedTo)

    const dispatch = useAppDispatch()
    return (
        <div className="border px-5 py-3 rounded-md ">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full bg-green-500",{
                        'bg-red-500':task.priority === 'high',
                        'bg-green-500':task.priority === 'low',
                        'bg-yellow-500':task.priority === 'medium',
                    })}>
                    </div>
                        <h1 className={cn({'line-through':task.isCompleted})}>
                            {task.title}

                        </h1>


                </div>
                <div className="flex gap-3 items-center">
                    <Button onClick={()=>dispatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500">
                        <Trash2 />
                    </Button>
                    <Checkbox checked={task.isCompleted} onClick={()=>dispatch(toggleCompleteState(task.id))} />
                </div>
            </div>
           <div>
           <p>Assign To -{assignedUser? assignedUser.name :'No One'} </p>
           <p className='mt-5'>{task.description}</p>
           </div>
        </div>

    );
};

export default TasksCard;