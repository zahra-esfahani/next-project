import { useRouter } from "next/router";
import React from "react";
import { useProductDetails } from "../src/services/queries";
import styles from "./ProductDetails.module.css";
function productDetails() {
  const router = useRouter();
  const { productId } = router.query;
  const { data } = useProductDetails(productId);
  console.log(productId);
  console.log(data?.data);
  return (
    <>
      <div className={styles.home}>
        {" "}
        <button
          className={styles.button}
          onClick={() => router.replace("/HomePage")}
        >
          صفحه اصلی
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.parent}>
          <img className={styles.image} src="/jacket.png" alt="" />
          <h5 className={styles.title}>{data?.data.name}</h5>
          <p className={styles.price}> قیمت : {data?.data.price} تومان</p>
          <p className={styles.price}>
            {" "}
            موجوی : {data?.data.quantity} عدد موجود است
          </p>
        </div>
      </div>
    </>
  );
}

export default productDetails;
