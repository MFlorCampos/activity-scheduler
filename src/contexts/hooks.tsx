import TaskContext from './index';
import { useContext } from 'react';

export function useOpenModal(): TaskContextType['state']['modalOpen'] {
  const {
    state: { modalOpen },
  } = useContext(TaskContext);

  return modalOpen;
}

export function useIsDelete(): TaskContextType['state']['isDelete'] {
  const {
    state: { isDelete },
  } = useContext(TaskContext);

  return isDelete;
}

export function useTasks(): TaskContextType['state']['tasks'] {
  const {
    state: { tasks },
  } = useContext(TaskContext);

  return tasks;
}

export function usePitch(): TaskContextType['state']['activePitch'] {
  const {
    state: { activePitch },
  } = useContext(TaskContext);

  return activePitch;
}

export function useActiveTask(): TaskContextType['state']['activeTask'] {
  const {
    state: { activeTask },
  } = useContext(TaskContext);

  return activeTask;
}

export function useSetActiveTask(): TaskContextType['actions']['setActiveTask'] {
  const {
    actions: { setActiveTask },
  } = useContext(TaskContext);

  return setActiveTask;
}

export function useSetPitch(): TaskContextType['actions']['setActivePitch'] {
  const {
    actions: { setActivePitch },
  } = useContext(TaskContext);

  return setActivePitch;
}

export function useSetModalOpen(): TaskContextType['actions']['setModalOpen'] {
  const {
    actions: { setModalOpen },
  } = useContext(TaskContext);

  return setModalOpen;
}
export function useSetIsDelete(): TaskContextType['actions']['setIsDelete'] {
  const {
    actions: { setIsDelete },
  } = useContext(TaskContext);

  return setIsDelete;
}

export function useSetTasks(): TaskContextType['actions']['setTasks'] {
  const {
    actions: { setTasks },
  } = useContext(TaskContext);

  return setTasks;
}
