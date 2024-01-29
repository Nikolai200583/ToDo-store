import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/slices/filterSlice";
import styles from "./index.module.css";

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <span
        className={styles.boxItems}
        onClick={() => dispatch(changeFilter("all"))}
      >
        Все задачи
      </span>
      <span
        className={styles.boxItems}
        onClick={() => dispatch(changeFilter("completed"))}
      >
        Завершенные
      </span>
      <span
        className={styles.boxItems}
        onClick={() => dispatch(changeFilter("active"))}
      >
        Активные
      </span>
    </div>
  );
};

export default Filters;
