import React from "react";
import styles from "../../HomePage/HomePage.module.css";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { chechItemsquantity } from "../helper/helper";
import { MdOutlineDelete } from "react-icons/md";

function HomeProducts({ data }) {
  const [state, dispatch] = useCart();

  const quantity = chechItemsquantity(state, data.id);
  
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <>
      <div className={styles.parent}>
        <img className={styles.image} src="/jacket.png" alt="" />
        <h5 className={styles.title}>{data.name}</h5>
        <p className={styles.price}> قیمت : {data.price} تومان</p>
        <div className={styles.footer}>
          <Link href={`/HomePage/${data.id}`}>
            <TfiLayoutListThumbAlt />
          </Link>
          <div>
            {quantity === 1 && (
              <button
                className={styles.icon}
                onClick={() => clickHandler("REMOVE_ITEM")}
              >
                <MdOutlineDelete />
              </button>
            )}
            {quantity > 1 && (
              <>
                <button
                  className={styles.icon}
                  onClick={() => clickHandler("DECREASE")}
                >
                  -
                </button>
              </>
            )}
            {quantity !== 0 ? <span>{quantity}</span> : null}
            {quantity === 0 ? (
              <button
                className={styles.icon}
                onClick={() => clickHandler("ADD_ITEM")}
              >
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button
                className={styles.icon}
                onClick={() => clickHandler("INCREASE")}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProducts;
