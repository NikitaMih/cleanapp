import classNames from "classnames";

import style from "./Modal.module.scss";
import { ModalWrapp } from "src/share/types";

const ModalWrapper: ModalWrapp = ({ active, setActive, children }) => {
  return (
    <div>
      <div className={classNames([style.modal], { [style.active]: active })} onClick={() => setActive(false)}>
        <div className={style.content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;
