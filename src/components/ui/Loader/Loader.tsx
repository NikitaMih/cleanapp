import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={style.root}>
      <div className={style.loaderContainer}></div>
    </div>
  );
};

export default Loader;
