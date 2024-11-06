/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaCalendarAlt, FaComments, FaPaperclip } from "react-icons/fa";

function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Placeholder or use the client's image URL if available
            alt="Client"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">{task.client_name}</span>
        </div>
        <span className="font-medium">{task.assigned_to}</span>
      </div>
      <p className="text-gray-600 text-sm">{task.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm flex items-center">
          <FaPaperclip className="mr-1" /> {task.attachments}
        </span>
        <span className="text-gray-500 text-sm flex items-center">
          <FaComments className="mr-1" /> {task.comments}
        </span>
        <span className="text-gray-500 text-sm flex items-center">
          <FaCalendarAlt className="mr-1" /> {task.due_date}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
