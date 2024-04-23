import { FC, useEffect } from "react";
import { useAuth } from "src/hooks/useAuth";
import { Header, ItemList } from "src/components/blocks";
import { useActions } from "src/hooks/useActions";
import style from "./MainPage.module.scss";

const MainPage: FC = () => {
  const { isAuth } = useAuth();
  const { login } = useActions();

  useEffect(() => {
    if (!isAuth) login({ login: "admin", password: "admin" });
  }, []);

  return (
    <div className={style.wrapper}>
      <Header />
      <ItemList />
    </div>
  );
};

export default MainPage;
