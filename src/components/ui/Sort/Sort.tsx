import { useSearchParams } from "react-router-dom";
import { ArrowIcon } from "src/assets/icons";
import style from "./Sort.module.scss";
import { createQueryString } from "src/share/utils";

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const handleOnChangeSort = () => {
    setSearchParams(`?${createQueryString([{ name: "sort", value: sort === "DESC" ? "ASC" : "DESC" }], searchParams)}`);
  };

  return (
    <div
      className={style.sort}
      onClick={handleOnChangeSort}
      style={{ transform: sort === "ASC" || !sort ? "rotate(90deg)" : "rotate(-90deg)" }}
    >
      <ArrowIcon />
    </div>
  );
};

export default Sort;
