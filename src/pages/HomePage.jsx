/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

const COLUMN_TITLES = [
  { status: "incomplete", label: "INCOMPLETE" },
  { status: "todo", label: "TODO" },
  { status: "doing", label: "DOING" },
  { status: "under review", label: "UNDER REVIEW" },
  { status: "completed", label: "COMPLETED" },
  { status: "over due", label: "OVER DUE" },
];

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  const filteredTasks = COLUMN_TITLES.map(({ status }) => ({
    status,
    tasks: tasks.filter((task) => task.status === status),
  }));

  return (
    <div className="overflow-x-auto flex space-x-4 p-4">
      {filteredTasks.map((column) => (
        <div key={column.status} className="w-60 flex-shrink-0">
          <h2 className="text-lg font-semibold text-center">
            {column.status.toUpperCase()}
          </h2>
          <div className="space-y-4">
            {column.tasks.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
