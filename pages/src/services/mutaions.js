import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";
import toast from "react-hot-toast";

const useSignIn=()=>{
  const mutationFn = (data) => api.post("auth/register", data);
  const onSuccess=()=>{
    toast.success("ثبت نام با موفقیت انجام شد")
  }
  return useMutation({ mutationFn , onSuccess });
}

const useLogIn=()=>{
  const mutationFn = (data) => api.post("auth/login", data);
  const onSuccess=()=>{
    toast.success("لاگین با موفقیت انجام شد")
  }
  return useMutation({ mutationFn  , onSuccess });

}

const useEditAndCreateProduct=(id , edit , Delete)=>{
  if(edit){
    const mutationFn = (data) => api.put(`products/${id}`, data);
    const onSuccess=()=>{
      toast.success("ویرایش  محصول انجام شد")
    }
    return useMutation({ mutationFn  , onSuccess});
  }
  else{
    const mutationFn = (data) => api.post("products", data);
    const onSuccess=()=>{
      toast.success("محصول مورد نظر اضافه شد")
    }
    return useMutation({ mutationFn ,onSuccess });
  }
}

const useDeleteProduct=()=>{
  const mutationFn = (id) => api.delete(`products/${id}`);
  const onSuccess=()=>{
    toast.error("محصول مورد نظر حذف شد")
  }
  return useMutation({ mutationFn , onSuccess });
}
export{useSignIn , useLogIn  , useEditAndCreateProduct ,useDeleteProduct}