import React, { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import ProductsList from "./src/components/ProductsList";
import { useModal } from "./src/context/ModalProvider";
import Pagination from "./src/components/Pagination";
import { getCookie } from "./src/configs/cookie";
import { useRouter } from "next/router";

function AdminPage() {
  useEffect(() => {
    const token = getCookie();
    console.log(token);
    setToken(token);
  }, []);

  const [token, setToken] = useState(null);
  const { setAction, setTitle, setIsOpend } = useModal();
  const [page, SetPage] = useState(1);
  const [search, setSerach] = useState("");
  const router = useRouter();

  // if (!token) router.push("/");
  
  const clickHandler = () => {
    setTitle("ایجاد محصول جدید");
    setAction("ایجاد");
    setIsOpend(true);
    console.log("oh");
  };
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.searchParent}>
          <CiSearch className={styles.search} />
        </div>
        <div className={styles.inputParent}>
          <input
            type="text"
            value={search}
            placeholder="جستجو کالا"
            onChange={(e) => setSerach(e.target.value)}
          />
        </div>
        <div className={styles.searchLeft}>
          <div className={styles.userParent}>
            <FaRegUser className={styles.user} />
          </div>
          <div>
            <p>میلاد عظمی</p>
            <span>مدیر</span>
          </div>
        </div>
      </div>

      <div className={styles.manageParent}>
        <div className={styles.manage}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.4624 23.125V18.25"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.4624 9.3125V6.875"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.4624 15.8125C21.2573 15.8125 22.7124 14.3574 22.7124 12.5625C22.7124 10.7676 21.2573 9.3125 19.4624 9.3125C17.6675 9.3125 16.2124 10.7676 16.2124 12.5625C16.2124 14.3574 17.6675 15.8125 19.4624 15.8125Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5376 23.125V20.6875"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5376 11.75V6.875"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5376 20.6875C12.3325 20.6875 13.7876 19.2324 13.7876 17.4375C13.7876 15.6426 12.3325 14.1875 10.5376 14.1875C8.74267 14.1875 7.2876 15.6426 7.2876 17.4375C7.2876 19.2324 8.74267 20.6875 10.5376 20.6875Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h4>مدیریت کالاها</h4>
        </div>
        <div>
          <button onClick={clickHandler}>افزودن محصول</button>
        </div>
      </div>
      <div>
        <ProductsList page={page} search={search} />
      </div>
      <Pagination SetPage={SetPage} page={page} />
    </>
  );
}

export default AdminPage;
