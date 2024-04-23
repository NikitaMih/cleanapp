import { ModalWrapper } from "src/components/ui";
import style from "./Modal.module.scss";
import { FC, useEffect, useState } from "react";
import { ModalFieldsEnum } from "src/share/enum";
import { checkFields } from "src/share/utils";
import { useActions } from "src/hooks/useActions";
import { Data, ModalPropsType } from "src/share/types";

const Modal: FC<ModalPropsType> = ({ active, setActive, title, description, add = true, data }) => {
  const [formValid, setFormValid] = useState(true);
  const { addItem, editItem } = useActions();
  const [fields, setFields] = useState<Data>(
    data
      ? data
      : {
          name: "",
          description: "",
          measurement_units: "",
          code: "",
        },
  );

  const inputHandler = (id: string) => (event: any) => {
    const { value } = event.target;
    setFields({ ...fields, ...{ [id]: value } });
  };

  useEffect(() => {
    const valid = checkFields(fields);
    setFormValid(valid);
  }, [fields]);

  const onConfirm = () => {
    if (add) {
      addItem(fields);
    } else {
      editItem(fields);
    }
  };

  return (
    <ModalWrapper active={active} setActive={setActive}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
      <div className={style.field}>
        <h3>Название</h3>
        <input className={style.input} value={fields.name} type="text" onChange={inputHandler(ModalFieldsEnum.NAME)} />
      </div>
      <div className={style.field}>
        <h3>Единицы измерения</h3>
        <input
          className={style.input}
          value={fields.measurement_units}
          type="text"
          onChange={inputHandler(ModalFieldsEnum.MEASUREMENT_UNITS)}
        />
      </div>
      <div className={style.field}>
        <h3>Артикул/код</h3>
        <input className={style.input} value={fields.code} type="text" onChange={inputHandler(ModalFieldsEnum.CODE)} />
      </div>
      <div className={style.field}>
        <h3>Описание</h3>
        <textarea value={fields.description} onChange={inputHandler(ModalFieldsEnum.DESCRIPTION)} />
      </div>
      <div className={style.controls}>
        <button className={style.cancel} onClick={() => setActive(false)}>
          Отмена
        </button>
        <button className={style.confirm} onClick={onConfirm} disabled={formValid}>
          Подтвердить
        </button>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
