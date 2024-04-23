import style from "./ItemList.module.scss";
import { useTypedSelector } from "src/store/store";
import { itemsState } from "src/store/selectors/itemsSelectors";
import { Loader, Pagination, SelectField } from "src/components/ui/";
import { useActions } from "src/hooks/useActions";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Table } from "src/components/blocks";

const ItemList = () => {
  const { getItems } = useActions();
  const [searchParams] = useSearchParams();
  const { items, loading, total } = useTypedSelector(itemsState);
  const [active, setActive] = useState(false);

  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");

  useEffect(() => {
    getItems({ page, pageSize, search, sort });
  }, [searchParams]);

  return (
    <>
      {loading ? <Loader /> : <Table items={items} active={active} setActive={setActive} />}
      <div className={style.controls}>
        <Pagination total={total} />
        <SelectField />
      </div>
    </>
  );
};
export default ItemList;
