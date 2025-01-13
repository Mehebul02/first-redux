import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

import { CalendarIcon } from "lucide-react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "@/redux/hook"
import { addTask } from "@/redux/features/task/taskSlice"
import { ITask } from "@/types"
// import { useSelector } from "react-redux"
// import { selectUsers } from "@/redux/features/user/userSlice"
import { useState } from "react"
import { useCreateTaskMutation } from "@/redux/api/baseApi"
// import { useForm } from "react-hook-form"

export function AddTaskModal() {

  const [ open, setOpen] = useState(false)
  const form = useForm()
  // const users = useSelector(selectUsers)
  // const dispatch = useAppDispatch()

  const [createTask, { data, isLoading, isError }] = useCreateTaskMutation()


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Secessfully submit', data)
    // dispatch(addTask(data as ITask))
    const taskData={...data, isComplete:false}
    createTask(taskData)
    setOpen(false)
    form.reset()
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fil up this form to add a new task.
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>

        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} value={field.value} />
                  </FormControl>
                  {/* <FormDescription {...field}>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="description" {...field} value={field.value} />
                  </FormControl>
                  {/* <FormDescription {...field}>This is your public display name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueData"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of birth</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange} // Update the form value
                      value={field.value} // Bind the current form value
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="assignedTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assign To</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange} // Update the form value
                      value={field.value} // Bind the current form value
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select assign" />
                      </SelectTrigger>
                      <SelectContent>
                        {/* {
                          users.map((user) => (
                            <SelectItem value={user.id}>{user.name}</SelectItem>

                          ))
                        } */}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <DialogFooter>
              <Button className="mt-5" type="submit">Save changes</Button>
            </DialogFooter>
          </form>



        </Form>


      </DialogContent>
    </Dialog>
  )
}
