import type { KeyboardEvent } from "react";

import { memo, useState } from "react";

import { SearchIcon } from "src/assets/icons";
import { createQueryString } from "src/share/utils";

import style from "./Search.module.scss";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const search = () => {
    setSearchParams(`?${createQueryString([{ name: "search", value: searchValue }], searchParams)}`);
  };

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") search();
  };

  return (
    <div className={style.search}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Поиск по названию"
        onChange={event => setSearchValue(event?.target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={search} className={style.searchBtn}>
        Поиск
      </button>
    </div>
  );
};

export default memo(Search);
