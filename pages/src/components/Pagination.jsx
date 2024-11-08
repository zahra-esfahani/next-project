import React from "react";
import styles from "./Pagination.module.css";

function Pagination({SetPage ,page}) {
  const clickhandler = (e) => {
    SetPage(e.target.innerText);
  };

  return (
    <>
      <div className={styles.parent}>
        <p onClick={clickhandler} >1</p>
        <p onClick={clickhandler} >2</p>
        <p onClick={clickhandler} >3</p>
      </div>
    </>
  );
}

export default Pagination;
