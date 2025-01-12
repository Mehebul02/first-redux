import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

const AddUser = () => {
      const form = useForm()
    
    return (
        <div>
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add User <Plus /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fil up this form to add a name.
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>

        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" >

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} value={field.value} />
                  </FormControl>
                  {/* <FormDescription {...field}>This is your public display name.</FormDescription> */}
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
        </div>
    );
};

export default AddUser;