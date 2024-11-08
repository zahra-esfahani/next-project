import React, { useEffect, useState } from "react";
import { useModal } from "./ModalProvider";
import { useEditAndCreateProduct } from "../services/mutaions";
import { useQueryClient } from "@tanstack/react-query";
import { useProducts } from "../services/queries";
import EditAndCreateModal from "../components/EditAndCreateModal";
import DeleteModal from "../components/DeleteModal";

function Modal({
  isOpend,
  title,
  action,
  editProduct,
  deleteProduct,
  Delete,
  edit,
  setEdit,
}) {
  useEffect(() => {
    if (edit) {
      setNewProduct({
        name: editProduct.name,
        price: editProduct.price,
        quantity: editProduct.quantity,
        id: editProduct.id,
      });
    } else {
      setNewProduct({ name: "", price: null, quantity: null });
    }
  }, [edit]);


  const { setIsOpend } = useModal();
  const { queryKey } = useProducts();
  const queryClient = useQueryClient();

  const [NewProduct, setNewProduct] = useState({
    name: "",
    price: null,
    quantity: null,
  });
  const { mutate } = useEditAndCreateProduct(NewProduct.id, edit, Delete);

  const changeHandler = (e) => {
    console.log(Delete);
    const name = e.target.name;
    const value = e.target.value;
    setNewProduct((i) => ({ ...i, [name]: value }));
  };

  const clickHandler = () => {
    if(!NewProduct.name || !NewProduct.price || !NewProduct.quantity) return;
    mutate(NewProduct, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({
          queryKey,
        });
        setNewProduct({ name: "", price: null, quantity: null });
        setEdit(false);
      },
      onError: (error) => console.log(error.message),
    });
    setIsOpend(false);
  };
  return (
    <>
      {Delete && <DeleteModal id={deleteProduct.id}/>}
      {isOpend && (
        <EditAndCreateModal
          changeHandler={changeHandler}
          clickHandler={clickHandler}
          NewProduct={NewProduct}
          setEdit={setEdit}
          title={title}
          action={action}
          Delete={Delete}
        />
      )}
    </>
  );
}

export default Modal;
