import { useAppSelector } from "@/redux/hook";

const Tasks = () => {

    const tasks = useAppSelector((state) => state.todo.tasks)
    console.log(tasks);
    return (
        <div>
            <h1>This is the tasks page</h1>
        </div>
    );
};

export default Tasks;