const setcookie=(token)=>{
    document.cookie = `Token=${token}; max-age=${
          60 * 60
      }`;
};

const getCookie=()=>{
  const cookie=document.cookie;
  return cookie
  .split("=")[1]
}

export {setcookie , getCookie};