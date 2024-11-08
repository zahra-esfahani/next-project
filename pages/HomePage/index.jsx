import React from "react";
import { useAllProducts } from "../src/services/queries";
import styles from "./HomePage.module.css";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../src/context/CartContext";
import { chechItemsquantity } from "../src/helper/helper";
import { MdOutlineDelete } from "react-icons/md";
import HomeProducts from "../src/components/HomeProducts";

function HomePage() {
  const { data } = useAllProducts();
  const router = useRouter();
  
  return (
    <>
      <div className={styles.admin}>
        <button
          className={styles.button}
          onClick={() => router.push("/AdminPage")}
        >
          پنل ادمین
        </button>
        <button className={styles.button}>حساب کاربری</button>
      </div>

      <div className={styles.container}>
        {data?.data.data.map((item) => (
       
        <HomeProducts data={item}/>
        
        ))}
      </div>
    </>
  );
}

export default HomePage;
