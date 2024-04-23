import type { FC } from "react";
import style from "./Badge.module.scss";

type BadgeProps = {
  total: number;
};

const Badge: FC<BadgeProps> = ({ total }) => {
  return <div className={style.badge}>{total} едениц</div>;
};

export default Badge;
