import type { PaginationProps } from "antd";
import { Pagination as AntDesignPagination } from "antd";
import classNames from "classnames";
import { useSearchParams } from "react-router-dom";
import { ArrowIcon } from "src/assets/icons";
import style from "./Pagination.module.scss";
import { createQueryString } from "src/share/utils";

const Pagination = ({ total }: { total: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page") ?? "1";

  const handleOnChangePagination: PaginationProps["onChange"] = page => {
    setSearchParams(`?${createQueryString([{ name: "page", value: String(page) }], searchParams)}`);
  };

  const itemRender: PaginationProps["itemRender"] = (page, type, originalElement) => {
    const itemRenderVariant: Record<any, any> = {
      prev: (
        <i style={{ transform: "scale(-1, -1)" }}>
          <ArrowIcon />
        </i>
      ),
      next: (
        <i>
          <ArrowIcon />
        </i>
      ),
      page: (
        <div
          className={classNames({
            isActive: page === Number(currentPage),
          })}
        >
          {page}
        </div>
      ),
    };

    if (itemRenderVariant[type]) {
      return itemRenderVariant[type];
    }

    return originalElement;
  };

  return (
    <div className={style.root}>
      <AntDesignPagination
        showSizeChanger={false}
        current={Number(currentPage) ?? 1}
        onChange={handleOnChangePagination}
        total={total}
        itemRender={itemRender}
        responsive
      />
    </div>
  );
};

export default Pagination;
