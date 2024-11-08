import React, { useState } from "react";
import styles from "./SignInPage.module.css";
import { useSignIn } from "./src/services/mutaions"
import { useRouter } from "next/router";

function SignInPage() {
  const [userSign, setUserSign] = useState({
    username: "",
    password: "",
    rePassword: "",
  });
  const { mutate } = useSignIn();
  const router=useRouter();

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSign((i) => ({ ...i, [name]: value }));
  };

  const clickHandler = () => {
    const { username, password, rePassword } = userSign;

    if (!username || !password)
      return alert("User Name and Password is Necessary");
    if (password !== rePassword) return alert("Passwords Isn't The Same!");

    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          console.log(data);
          router.replace("/")
        },
        onError: (error) => console.log(error.message),
      }
    );
  };
  return (
    <>
      <div className={styles.parent}>
        <svg
          width="55"
          height="85"
          viewBox="0 0 80 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5866 16.8032H11.5865V20.854V50.2598H11.5885C11.5872 50.3847 11.5865 50.5098 11.5865 50.635C11.5865 69.3197 26.9014 84.4667 45.7932 84.4667C64.6851 84.4667 80 69.3197 80 50.635C80 31.9503 64.6851 16.8033 45.7932 16.8033C45.6931 16.8033 45.5931 16.8037 45.4932 16.8046V16.8032H29.8901V16.8032H25.6894C25.6894 14.5966 25.3246 12.4116 24.6159 10.373C23.9071 8.3343 22.8683 6.48191 21.5588 4.92158C20.2492 3.36125 18.6945 2.12352 16.9835 1.27908C15.2725 0.434631 13.4386 0 11.5866 0L11.5866 16.8032ZM45.5683 80.1159C61.933 80.1159 75.1992 66.9504 75.1992 50.71C75.1992 34.4697 61.933 21.3042 45.5683 21.3042C29.2037 21.3042 15.9375 34.4697 15.9375 50.71C15.9375 66.9504 29.2037 80.1159 45.5683 80.1159ZM19.7528 9.5004C20.1184 9.13077 20.1152 8.53469 19.7456 8.16903C19.7105 8.13437 19.6735 8.10302 19.6347 8.07498L16.0106 4.44321C15.6434 4.07517 15.0473 4.07454 14.6792 4.44181C14.3112 4.80907 14.3106 5.40515 14.6778 5.7732L17.7479 8.84977L14.7354 11.8951C14.3697 12.2647 14.3729 12.8608 14.7426 13.2265C15.1122 13.5921 15.7083 13.5889 16.0739 13.2193L19.7528 9.5004ZM0.279351 9.49609C-0.0902856 9.13043 -0.0935104 8.53436 0.272148 8.16472L3.95098 4.44586C4.31664 4.07622 4.91272 4.073 5.28235 4.43866C5.65199 4.80431 5.65522 5.40039 5.28956 5.77003L2.277 8.81536L5.34708 11.8919C5.71434 12.26 5.71371 12.8561 5.34567 13.2233C4.97763 13.5906 4.38155 13.59 4.01429 13.2219L0.390152 9.59011C0.351444 9.56208 0.314381 9.53075 0.279351 9.49609ZM71.8723 51.8781C71.256 65.7535 59.7149 76.8152 45.568 76.8152C31.0262 76.8152 19.2378 65.1275 19.2378 50.7101C19.2378 36.2926 31.0262 24.6049 45.568 24.6049C57.4798 24.6049 67.5442 32.4474 70.7949 43.2087H59.1751C56.542 38.3779 51.469 35.1068 45.6429 35.1068C37.1084 35.1068 30.1898 42.1262 30.1898 50.785C30.1898 59.4437 37.1084 66.4631 45.6429 66.4631C51.5934 66.4631 56.7583 63.0508 59.3404 58.0497C59.5828 58.1073 59.9141 58.1367 60.3459 58.1367C65.05 58.0764 69.9966 55.8342 71.8723 51.8781ZM59.7459 45.3092H68.8978V45.3098H71.8145C71.8205 45.4256 71.8235 45.5499 71.8235 45.6832C71.8235 50.6312 67.1159 55.8168 61.0998 55.9323L61.0998 55.9341L58.9265 55.9627C58.8501 55.9659 58.7732 55.9675 58.6959 55.9675C55.713 55.9675 53.2949 53.5829 53.2949 50.6414C53.2949 47.7 55.713 45.3154 58.6959 45.3154V45.3093H59.7459V45.3092Z"
            fill="#55A3F0"
          />
        </svg>
        <h4>فرم ثبت نام</h4>
        <input
          type="text"
          placeholder="نام کاربری"
          name="username"
          value={userSign.username}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="رمز عبور"
          name="password"
          value={userSign.password}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="تکرار رمز عبور"
          name="rePassword"
          value={userSign.rePassword}
          onChange={changeHandler}
        />
        <button onClick={clickHandler}>ثبت نام</button>
        <p onClick={() => router.push("/")}>حساب کاربری دارید؟</p>
      </div>
    </>
  );
}

export default SignInPage;
