declare type TaskContextType = {
  state: {
    modalOpen: boolean;
    remove: boolean;
    tasks: PitchesType[] | any;
    activePitch: string;
    activeTask: string;
  };
  actions: {
    setModalOpen: (val: boolean) => void;
    setRemove: (val: boolean) => void;
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
};
