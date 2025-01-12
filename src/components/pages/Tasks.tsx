import { selectFilter, selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import TasksCard from "../module/tasks/TasksCard";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { AddTaskModal } from "../module/tasks/AddTaskModal";

const Tasks = () => {

  const tasks = useAppSelector(selectTasks)
  const dispatch = useAppDispatch()

  const filter = useAppSelector(selectFilter)
  console.log(filter);
  console.log(tasks);
  return (
    <div className="max-w-7xl mx-auto mt-6 space-y-5">
      <div className="flex justify-end items-center gap-3">
        <Tabs defaultValue='all'>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger onClick={()=>dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
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