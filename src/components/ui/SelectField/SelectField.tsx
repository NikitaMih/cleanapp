import { Select } from "antd";
import style from "./SelectField.module.scss";
import { sizeOptions } from "src/share/mock";
import { useSearchParams } from "react-router-dom";
import { createQueryString } from "src/share/utils";
import { ArrowDownIcon } from "src/assets/icons";

const SelectField = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (value: string) => {
    setSearchParams(`?${createQueryString([{ name: "pageSize", value }], searchParams)}`);
  };

  return (
    <div className={style.flex}>
      <div>Показывать по:</div>
      <Select
        className={style.select}
        defaultValue="10"
        onChange={handleChange}
        options={sizeOptions}
        suffixIcon={<ArrowDownIcon />}
      />
    </div>
  );
};

export default SelectField;
