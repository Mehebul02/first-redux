
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { AddTaskModal } from "../module/tasks/AddTaskModal";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import TasksCard from "../module/tasks/TasksCard";
import { ITask } from "@/types";

const Tasks = () => {

  // const tasks = useAppSelector(selectTasks)
  // const dispatch = useAppDispatch()
  // const filter = useAppSelector(selectFilter)
  // console.log(filter);
  // console.log(tasks);

  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true

  })
  console.log({ data, isLoading, isError });



  if (isError) {
    return <p>Data Not Found</p>
  }

  if (isLoading) {
    return <p>Loading....</p>
  }

  return (
    <div className="max-w-7xl mx-auto mt-6 space-y-5">
      <div className="flex justify-end items-center gap-3">
        <Tabs defaultValue='all'>
          <TabsList className="grid w-full grid-cols-4">
            {/* <TabsTrigger onClick={()=>dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={()=>dispatch(updateFilter("high"))} value="high">High</TabsTrigger> */}
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>

        <AddTaskModal />
      </div>

      {
        !isLoading && data.tasks.map((task: ITask) => (
          <TasksCard task={task} key={task.id} />
        ))
      }
    </div>
  );
};

export default Tasks;