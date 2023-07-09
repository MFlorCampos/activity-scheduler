declare type TaskContextType = {
  state: {
    modalOpen: boolean;
    isDelete: boolean;
    tasks: PitchesType[] | any;
    activePitch: string;
    activeTask: string;
  };
  actions: {
    setModalOpen: (val: boolean) => void;
    setIsDelete: (val: boolean) => void;
    setTasks: (val: PitchesType[]) => void;
    setActivePitch: (val: string) => void;
    setActiveTask: (val: string) => void;
  };
};

declare type PitchesType = {
  id: string;
  title: string;
  tasks: Array<TasksType>;
};

declare type TasksType = {
  taskId: string;
  type: string;
  asignee: string;
  date: string;
  //weather: 'Temperature: 21ºC. Precipitation: 70%',
};
