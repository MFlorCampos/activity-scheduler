import AddTaskButton from "../AddTaskButton/AddTaskButton";
import TaskCard from "../Card/TaskCard";

const TaskList = (props: any) => {
  const { index, tasks } = props;
  const activities = tasks.tasks;
  const columnId = tasks.id;

  return (
    <>
      {activities.map((task: TasksType, key: number) => {
        return (
          <TaskCard
            key={key}
            index={`task_${key}`}
            task={task}
            columnId={columnId}
          />
        );
      })}
      <AddTaskButton index={`column_${index}`} tasks={tasks} />
    </>
  );
};

export default TaskList;
