import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import TasksCard from "../module/tasks/TasksCard";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { AddTaskModal } from "../module/tasks/AddTaskModal";

const Tasks = () => {

  const tasks = useAppSelector(selectTasks)

  const filter = useAppSelector(selectFilter)
  console.log(filter);
  console.log(tasks);
  return (
    <div className="max-w-7xl mx-auto mt-6 space-y-5">
     <div className="flex justify-between items-center">
     <Tabs defaultValue="account" className="w-[400px] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      </Tabs>
    
     <AddTaskModal />
     </div>
    
      {
        tasks.map((task) => (
          <TasksCard task={task} />
        ))
      }
    </div>
  );
};

export default Tasks;