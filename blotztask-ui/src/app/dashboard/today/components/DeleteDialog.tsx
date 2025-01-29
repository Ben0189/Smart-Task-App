import React from "react";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const DeleteTaskDialog = () => {
  console.log("DeleteDialog is rendering!"); 
  return (
    <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6 z-50">
      <DialogHeader>
        <DialogTitle>Delete This Task</DialogTitle>
      </DialogHeader>
      <p>Are you sure you want to delete this task?</p>
      <DialogFooter className="flex justify-between mt-4 gap-4">
        <button type="button" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          Cancel
        </button>
        <button type="button" className= "px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ">
          Delete
        </button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeleteTaskDialog;
