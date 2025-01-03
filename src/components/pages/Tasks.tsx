import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {

    const tasks = useAppSelector(selectTasks)

    const filter = useAppSelector(selectFilter)
    console.log(filter);
    console.log(tasks);
    return (
        <div>
            <h1>This is the tasks page</h1>
        </div>
    );
};

export default Tasks;