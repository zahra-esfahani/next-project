import React, { useEffect, useState } from "react";
import { useAllProducts } from "../src/services/queries";
import styles from "./HomePage.module.css";
import { useRouter } from "next/router";
import HomeProducts from "../src/components/HomeProducts";
import { getCookie } from "../src/configs/cookie";

function HomePage() {
  useEffect(() => {
    const token = getCookie();
    console.log(token);
    setToken(token);
  }, []);

  const [token, setToken] = useState(null);
  const { data } = useAllProducts();
  const router = useRouter();
  // if (!token) router.push("/");
  return (
    <>
      <div className={styles.admin}>
        <button
          className={styles.button}
          onClick={() => (token ? router.push("/AdminPage") : router.push("/"))}
        >
          پنل ادمین
        </button>
        <button
          className={styles.button}
          onClick={() => (token ? router.push("/UserPage") : router.push("/"))}
        >
          حساب کاربری
        </button>
      </div>

      <div className={styles.container}>
        {data?.data.data.map((item) => (
          <HomeProducts data={item} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
