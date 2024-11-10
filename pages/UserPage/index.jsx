import React from "react";
import { useCart } from "../src/context/CartContext";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import styles from "./UserPage.module.css"

function UserPage() {
  const [state, dispatch] = useCart();
  console.log(state);

  return (
    <>
      <div className={styles.parent}>
      <div className={styles.sidebar}>
        <div>
          <TbChecklist />
          <p>قیمت نهایی:</p>
          <span>{state.total}</span>
        </div>
        <div>
          <FaHashtag />
          <p>موجودی سبد خرید:</p>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
      </div>
      <div>
        {state.selectedItems.map((product) => (
          <div className={styles.card}>
            <img src="/jacket.png" />
            <p>{product.name}</p>
            <p>{product.quantity} عدد از این محصول در سبد خرید شما موجود است</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserPage;
