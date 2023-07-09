import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
const INDEXLOCALSTORAGE = 'tasks';
const loadDataFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(INDEXLOCALSTORAGE) || '[]');
  } catch {
    return {};
  }
};

const TaskContext = createContext({} as TaskContextType);

const TaskProvider: FC<PropsWithChildren> = props => {
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const lsData = loadDataFromLocalStorage();

      if (lsData && lsData.length > 0) {
        setTasks(lsData);
      }
    }
  }, []);

  const [tasks, setTasks] = useState<PitchesType[]>([
    {
      id: 'column_1',
      title: 'Pitch 1',
      tasks: [],
    },
    {
      id: 'column_2',
      title: 'Pitch 2',
      tasks: [],
    },
    {
      id: 'column_3',
      title: 'Pitch 3',
      tasks: [],
    },
  ]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [isDelete, setIsDelete] = useState<boolean>(false);

  const [activePitch, setActivePitch] = useState<string>('');

  const [activeTask, setActiveTask] = useState<string>('');
  const handleSetTasks = async (tasks: any) => {
    await localStorage.setItem(INDEXLOCALSTORAGE, JSON.stringify(tasks));
    setTasks(tasks);
  };
  const actions = {
    setModalOpen,
    setIsDelete,
    setTasks: handleSetTasks,
    setActivePitch,
    setActiveTask,
  };

  const state = {
    modalOpen,
    isDelete,
    tasks,
    activePitch,
    activeTask,
  };

  return (
    <TaskContext.Provider value={{ state, actions }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export { TaskContext as default, TaskProvider as Provider };
