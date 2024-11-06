/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import TaskCard from "./TaskCard";

const ColumnSection = ({ title, tasks }) => (
  <div className="min-w-[300px] bg-white rounded-lg shadow-md p-4 flex flex-col space-y-4">
    <h2 className="text-lg font-bold text-gray-700">{title.toUpperCase()}</h2>
    <div className="space-y-4 overflow-y-auto">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  </div>
);

export default ColumnSection;
