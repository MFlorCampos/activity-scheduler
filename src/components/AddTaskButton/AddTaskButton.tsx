import Image from "next/image";
import { default as PlusIcon } from "../../../public/plus.svg";
import { useSetModalOpen, useOpenModal, useSetPitch } from "@/contexts/hooks";
import "./AddTaskButton.scss";

const AddTaskButton = (props: any) => {
  const { tasks } = props;
  const openModal = useOpenModal();

  const setModalOpen = useSetModalOpen();
  const setActivePitch = useSetPitch();

  const handleClickOpen = () => {
    setActivePitch(tasks.id);
    setModalOpen(!openModal);
  };

  return (
    <button type="button" className="addtask" onClick={handleClickOpen}>
      <Image src={PlusIcon.src} alt="Add Icon" width={15} height={15} />
    </button>
  );
};

export default AddTaskButton;
