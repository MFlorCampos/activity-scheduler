import Image from 'next/image';
import { default as DeleteIcon } from '../../../public/delete.svg';
import { default as EditIcon } from '../../../public/edit.svg';
import './TaskCard.scss';

import {
  useSetActiveTask,
  useOpenModal,
  useSetModalOpen,
  useSetPitch,
  useSetIsDelete,
} from '@/contexts/hooks';

const TaskCard = (props: any) => {
  const { task, columnId } = props;

  const openModal = useOpenModal();
  const setModalOpen = useSetModalOpen();

  const setIsDelete = useSetIsDelete();

  const setActivePitch = useSetPitch();

  const setActiveTask = useSetActiveTask();

  const handleClickEdit = (columnId: string) => {
    setActivePitch(columnId);
    setActiveTask(task.taskId);
    setModalOpen(!openModal);
  };

  const handleClickDelete = (columnId: string) => {
    setIsDelete(true);
    setActivePitch(columnId);
    setActiveTask(task.taskId);
    setModalOpen(!openModal);
  };

  return (
    <div className="card">
      <h4>{task.type}</h4>
      <p>Will be done by {task.asignee}</p>
      <p>
        {task.date.slice(0, 15)} / {task.date.slice(16, 21)}
      </p>
      <span className="divider"></span>
      <div className="footerCard">
        <div className="icons">
          <button
            className="cardEdit"
            onClick={() => handleClickEdit(columnId)}
          >
            <Image
              src={EditIcon.src}
              alt="Edit Icon"
              className="editLogo"
              width={30}
              height={30}
            />
          </button>

          <button
            className="cardEdit"
            onClick={() => handleClickDelete(columnId)}
          >
            <Image
              src={DeleteIcon.src}
              alt="Delete Icon"
              className="deleteLogo"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
