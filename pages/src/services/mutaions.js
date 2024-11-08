import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

const useSignIn=()=>{
  const mutationFn = (data) => api.post("auth/register", data);
  return useMutation({ mutationFn });
}

const useLogIn=()=>{
  const mutationFn = (data) => api.post("auth/login", data);
  return useMutation({ mutationFn });

}

const useEditAndCreateProduct=(id , edit , Delete)=>{
  if(edit){
    const mutationFn = (data) => api.put(`products/${id}`, data);
    return useMutation({ mutationFn });
  }
  else{
    const mutationFn = (data) => api.post("products", data);
    return useMutation({ mutationFn });
  }
 
}

const useDeleteProduct=()=>{
  const mutationFn = (id) => api.delete(`products/${id}`);
  return useMutation({ mutationFn });
}
export{useSignIn , useLogIn  , useEditAndCreateProduct ,useDeleteProduct}