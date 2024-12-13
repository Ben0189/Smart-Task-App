'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AddTask } from './components/add-button';
import { TaskTable } from './components/task-table';
import { TaskItemDTO } from '@/model/task-Item-dto';
import { fetchAllTaskItems } from '@/services/taskService';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Page() {
    const [taskList, setTaskList] = useState<TaskItemDTO[]>([]);
    const [isDialogOpen, setDialogOpen] = useState(true);

    //Not implemented yet
    async function handleAddTask() {
    }

    const loadTasks = async () => {
        const data = await fetchAllTaskItems();
        setTaskList(data);
    }

    /**
     * Fetch the tasks once and set the hook on the first rendering
     */
    useEffect(() => {
        loadTasks();
    }, []); // Runs on the first render using [] parameter and rerun when state changes, e.g add task

   

    return (
        <div className="flex flex-col mt-10 mr-10">

          <div className="flex justify-end">
            <AddTask handleAddTask={handleAddTask}/>
          </div>          

          <TaskTable tasks={taskList} />

          <div className="flex justify-end mt-10">
            <Button asChild className="ml-auto">
              <Link href="/">Return Home Page</Link>
            </Button>
          </div>

          
          <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              {/* This will trigger the Dialog */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[370px] bg-white">
              <DialogHeader>
                <DialogDescription>
                  Are you sure you want to delete the Task?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex justify-between">
                <Button variant="outline" className="w-full focus:outline-none focus:ring-0 focus:border-black-500">
                  Cancel
                </Button>
                <Button className="ml-2 w-full">
                  Yes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
            

        </div>
      );
}