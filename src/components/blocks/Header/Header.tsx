import { FC, useState } from "react";
import style from "./Header.module.scss";
import { useTypedSelector } from "src/store/store";
import { itemsState } from "src/store/selectors/itemsSelectors";
import { AddButton, Badge, Search } from "src/components/ui";
import Modal from "src/components/blocks/Modal/Modal";
import { addModal } from "src/share/mock";

const Header: FC = () => {
  const { total } = useTypedSelector(itemsState);
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={style.header}>
        <div className={style.flex}>
          <h1 className={style.title}>Номенклатура</h1>
          <Badge total={total} />
        </div>
        <div className={style.flex}>
          <Search />
          <AddButton onAdd={() => setActive(true)} />
        </div>
      </div>
      {active && <Modal title={addModal.title} description={addModal.description} active={active} setActive={setActive} />}
    </>
  );
};

export default Header;
