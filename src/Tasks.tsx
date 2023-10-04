// import React, { useState, useDispatcher, useCallback, createContext, createFactory, useContext } from "react"


// import { Cell, Group, List, Button } from "@vkontakte/vkui"
// const TasksContext = createContext(null);

// const TasksDispatchContext = createContext(null);

// export function TasksProvider({ children }) {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   return (
//     <TasksContext.Provider value={tasks}>
//       <TasksDispatchContext.Provider value={dispatch}>
//         {children}
//       </TasksDispatchContext.Provider>
//     </TasksContext.Provider>
//   );
// }

// export function useTasks() {
//   return useContext(TasksContext);
// }

// export function useTasksDispatch() {
//   return useContext(TasksDispatchContext);
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "changed": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// const initialTasks = [
//   { id: 0, text: "Hello", done: true },
//   { id: 1, text: "Visit the temple", done: false },
//   { id: 2, text: "Drink matcha", done: false },
// ];

// // Add
// export function TaskList() {
//   const tasks = useTasks();
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Task({ task }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const dispatch = useTasksDispatch();
//   let taskContent;
//   if (isEditing) {
//     taskContent = (
//       <>
//         <input
//           value={task.text}
//           onChange={(e) => {
//             dispatch({
//               type: "changed",
//               task: {
//                 ...task,
//                 text: e.target.value,
//               },
//             });
//           }}
//         />
//         <Button onClick={() => setIsEditing(false)}>Save</Button>
//       </>
//     );
//   } else {
//     taskContent = (
//       <>
//         {task.text}
//         <Button onClick={() => setIsEditing(true)}>Edit</Button>
//       </>
//     );
//   }
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={task.done}
//         onChange={(e) => {
//           dispatch({
//             type: "changed",
//             task: {
//               ...task,
//               done: e.target.checked,
//             },
//           });
//         }}
//       />
//       {taskContent}
//       <button
//         onClick={() => {
//           dispatch({
//             type: "deleted",
//             id: task.id,
//           });
//         }}
//       >
//         Delete
//       </button>
//     </label>
//   );
// }

// export default function AddTask() {
//   const [text, setText] = useState("");
//   const dispatch = useTasksDispatch();
//   return (
//     <>
//       <input
//         placeholder="Add task"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <button
//         onClick={() => {
//           setText("");
//           dispatch({
//             type: "added",
//             id: nextId++,
//             text: text,
//           });
//         }}
//       >
//         Add
//       </button>
//     </>
//   );
// }

// let nextId = 3;
// function createContext(arg0: null) {
//   throw new Error("Function not implemented.");
// }

// function useReducer(tasksReducer: (tasks: any, action: any) => any, initialTasks: { id: number; text: string; done: boolean; }[]): [any, any] {
//   throw new Error("Function not implemented.");
// }


export default {
  
}

