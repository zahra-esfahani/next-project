import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useProducts = (page , search) => {
  const queryFn = () => api.get(`products?page=${page}&limit=10&name=${search}`);
  const queryKey = ["products-list", page , search];
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  };
  return useQuery({
    queryKey,
    queryFn,
    onSuccess
  });
};

const useAllProducts=()=>{
  const queryFn = () => api.get("products");
  const queryKey = ["Home-Products"];
  return useQuery({
    queryKey,
    queryFn,
  });

};

const useProductDetails=(id)=>{
  const queryFn = () => api.get(`products/${id}`);
  const queryKey = ["product-detailes"];
  return useQuery({
    queryKey,
    queryFn,
  });
}

export { useProducts , useAllProducts , useProductDetails };
