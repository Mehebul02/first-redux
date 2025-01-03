import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TasksCard from "../module/tasks/TasksCard";

const Tasks = () => {

    const tasks = useAppSelector(selectTasks)

    const filter = useAppSelector(selectFilter)
    console.log(filter);
    console.log(tasks);
    return (
        <div className="max-w-7xl mx-auto mt-6 space-y-5">
          {
            tasks.map((task)=>(
                <TasksCard task={task}/>
            ))
          }
        </div>
    );
};

export default Tasks;