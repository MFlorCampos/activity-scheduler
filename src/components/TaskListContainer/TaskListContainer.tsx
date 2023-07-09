import { useTasks } from '@/contexts/hooks';
import TaskList from '../TaskList/TaskList';
import './TaskListContainer.scss';

const TaskListContainer = () => {
  const tasks = useTasks();

  return (
    <div className="columns">
      {tasks.map((task: any, key: any) => {
        return (
          <div className="container" key={key}>
            <h2>{task.title}</h2>
            <TaskList tasks={task} index={`column_${key}`} />
          </div>
        );
      })}
    </div>
  );
};

export default TaskListContainer;
