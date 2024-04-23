import type { FC } from "react";

import { EditIcon } from "src/assets/icons";
import style from "./EditButton.module.scss";

type EditButtonProps = {
  onEdit: () => void;
};

const EditButton: FC<EditButtonProps> = ({ onEdit }) => {
  return (
    <button className={style.editBtn} onClick={onEdit}>
      <EditIcon />
    </button>
  );
};

export default EditButton;
