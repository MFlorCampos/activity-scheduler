import {
  useOpenModal,
  usePitch,
  useSetModalOpen,
  useSetTasks,
  useTasks,
  useActiveTask,
  useSetActiveTask,
  useIsDelete,
  useSetIsDelete,
} from '@/contexts/hooks';
import './Modal.scss';

import { useEffect, useState, MouseEvent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Modal = () => {
  const tasks = useTasks();
  const setTasks = useSetTasks();

  const activePitch = usePitch();

  const activeTask = useActiveTask();
  const setActiveTask = useSetActiveTask();

  const openModal = useOpenModal();
  const setModalOpen = useSetModalOpen();

  const isDelete = useIsDelete();
  const setIsDelete = useSetIsDelete();

  const [disabled, setDisabled] = useState(true);

  const [startDate, setStartDate] = useState(new Date());
  const isSelectedDateInFuture = +startDate > +new Date();

  const date = new Date();
  let currentMins = date.getMinutes();
  let currentHour = date.getHours();
  if (isSelectedDateInFuture) {
    currentHour = 0;
    currentMins = 0;
  }

  const [activity, setActivity] = useState('');
  const [performer, setPerformer] = useState('');

  useEffect(() => {
    if (openModal) {
      if (activeTask) {
        setTaskStates();
      }
    }
  }, [openModal]);

  useEffect(() => {
    if (activity && performer) {
      setDisabled(false);
    }
  }, [activity, performer]);

  const resetData = () => {
    setDisabled(true);
    setModalOpen(false);
    setActivity('');
    setPerformer('');
    setStartDate(new Date());
    setIsDelete(false);

    setActiveTask('');
  };

  const findColumn = tasks.find((task: PitchesType) => task.id === activePitch);
  const columnTasks = findColumn && findColumn.tasks;
  const indexTask =
    columnTasks &&
    columnTasks.findIndex((task: TasksType) => task.taskId === activeTask);
  const indexColumn = tasks.findIndex(
    (pitches: PitchesType) => pitches.id === activePitch
  );

  const handleClickDelete = () => {
    const newTask = [...tasks];
    const newDeletedTask = [...findColumn.tasks];

    newTask[indexColumn] = {
      ...findColumn,
      tasks: newDeletedTask,
    };

    newDeletedTask.splice(indexTask, 1);
    setTasks(newTask);
    resetData();

    handleClickClose();
  };

  const handleClickClose = () => {
    resetData();
  };

  const editTasks = () => {
    const newTask = [...tasks];
    const newEditTask = [...findColumn.tasks];

    newEditTask[indexTask].type = activity;
    newEditTask[indexTask].date = startDate.toISOString();
    newEditTask[indexTask].asignee = performer;

    if (findColumn) {
      newTask[indexColumn] = {
        ...findColumn,
        tasks: newEditTask,
      };
    }

    setTasks(newTask);
    resetData();
  };

  const setTaskStates = () => {
    const findTask = findColumn.tasks.filter(
      (task: TasksType) => task.taskId === activeTask
    );

    setActivity(findTask[0].type);
    setPerformer(findTask[0].asignee);
    setStartDate(new Date(findTask[0].date));
  };

  const saveNewCard = () => {
    const tasksLenght = findColumn.tasks.length;

    const findDate = columnTasks.filter(
      (task: TasksType) => task.date === startDate.toString()
    );

    if (findDate.length > 0) {
      alert(
        'There is another activity scheduled at the same time, please select another date/time'
      );
    } else {
      const newTask = [...tasks];

      if (findColumn) {
        newTask[indexColumn] = {
          ...findColumn,
          tasks: [
            ...findColumn.tasks,
            {
              taskId: `${activePitch}-task_${tasksLenght}`,
              type: activity,
              asignee: performer,
              date: startDate.toString(),
            },
          ],
        };
      }

      setTasks(newTask);
    }

    resetData();
  };

  const handleOnClick = activeTask != '' ? editTasks : saveNewCard;

  const handleClickSave = () => {
    handleOnClick();
  };

  const handleOnClickModal = (e: MouseEvent<HTMLInputElement>) =>
    e.stopPropagation();

  return (
    openModal && (
      <div id="myModal" className="modal" onClick={handleClickClose}>
        <div onClick={handleOnClickModal} className="modalContent">
          <div className="modalContentContainer">
            <button className="modalClose" onClick={handleClickClose}>
              &times;
            </button>
            {!isDelete ? (
              <>
                <p>Add new task</p>
                <label>Choose a activity:</label>
                <select
                  name="performers"
                  id="performer-select"
                  value={activity}
                  onChange={e => setActivity(e.target.value)}
                >
                  <option value="" disabled>
                    Please choose an option
                  </option>
                  <option value="Fertilization">Fertilization</option>
                  <option value="Mowing">Mowing</option>
                  <option value="Irrigation">Irrigation</option>
                  <option value="Aeration">Aeration</option>
                </select>
                <p>Date</p>
                <div className="modalDate">
                  <DatePicker
                    dateFormat={'yyyy-mm-dd  hh:mm'}
                    showTimeSelect
                    selected={startDate}
                    minDate={new Date()}
                    minTime={
                      new Date(new Date().setHours(currentHour, currentMins))
                    }
                    maxTime={new Date(new Date().setHours(23, 59))}
                    onChange={(date: any) => setStartDate(date)}
                  />
                </div>

                <label>Choose a performer:</label>

                <select
                  name="performers"
                  id="performer-select"
                  value={performer}
                  onChange={e => setPerformer(e.target.value)}
                >
                  <option value="" disabled>
                    Please choose an option
                  </option>
                  <option value="John">John</option>
                  <option value="Tom">Tom</option>
                  <option value="Tony">Tony</option>
                </select>

                <button
                  className="modalSave"
                  onClick={handleClickSave}
                  disabled={disabled}
                >
                  Save Task
                </button>
              </>
            ) : (
              <>
                <p>Delete Activity</p>
                <p>Are you sure to delete this activity?</p>
                <div className="modalDelete">
                  <button
                    className="modalDeleteBtn"
                    onClick={handleClickDelete}
                  >
                    Yes
                  </button>
                  <button className="modalDeleteBtn" onClick={handleClickClose}>
                    No
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
