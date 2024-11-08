import api from "./api";

const sendUser= async(userCheck)=>{
    console.log(userCheck);
    const {username , password}=userCheck;
    try {
        const response = await api.post("auth/register", {username , password});
        return { response };
      } catch (error) {
        return { error };
      }
}

const getUserToken=async(userCheck)=>{
    const {username , password}=userCheck;
    try {
        const response = await api.post("auth/login", {username , password});
        return { response };
      } catch (error) {
        return { error };
      }
}
export {sendUser , getUserToken}