import React, { useState } from "react";
import AddTaskForm from "./add-task-form";

const AddTaskCard = ({ onAddTask }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div
      className="p-4 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
      onClick={() => setIsFormVisible(true)}
    >
      {!isFormVisible ? (
        <p>Click here to add today task</p>
      ) : (
        <AddTaskForm
          onSubmit={(taskTitle) => {
            onAddTask(taskTitle); 
            setIsFormVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default AddTaskCard;
