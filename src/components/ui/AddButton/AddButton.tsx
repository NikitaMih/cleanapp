import type { FC } from "react";

import { PlusIcon } from "src/assets/icons";
import style from "./AddButton.module.scss";

type AddButtonProps = {
  onAdd: () => void;
};

const AddButton: FC<AddButtonProps> = ({ onAdd }) => {
  return (
    <button className={style.addBtn} onClick={onAdd}>
      <PlusIcon />
      <span className={style.addBtnText}>Новая позиция</span>
    </button>
  );
};

export default AddButton;
