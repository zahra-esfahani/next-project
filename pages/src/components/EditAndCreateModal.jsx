import React from "react";
import { useModal } from "../context/ModalProvider";
import styles from "../context/Modal.module.css";

function EditAndCreateModal({
  changeHandler,
  clickHandler,
  NewProduct,
  setEdit,
  title,
  action
}) {
  const { setIsOpend } = useModal();

  return (
    <div className={styles.parent}>
      <div className={styles.modal}>
        <h4>{title}</h4>
        <div className={styles.design}>
          <label htmlFor="name">نام کالا</label>
          <input
            type="text"
            name="name"
            placeholder="نام کالا"
            value={NewProduct.name}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.design}>
          <label htmlFor="quantity">تعداد موجودی </label>
          <input
            type="text"
            name="quantity"
            placeholder=" تعداد"
            value={NewProduct.quantity}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.design}>
          <label htmlFor="price">قیمت</label>
          <input
            type="text"
            name="price"
            placeholder="قیمت "
            value={NewProduct.price}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.buttons}>
          <button onClick={clickHandler} style={{backgroundColor:"#55a3f0"}}>{action}</button>
          <button
            onClick={() => {
              setIsOpend(false), setEdit(false);
            }}
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditAndCreateModal;
