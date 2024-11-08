const chechItemsquantity=(state , id)=>{
    const index=state.selectedItems.findIndex((item)=>item.id===id);
    if(index===-1)
    {
      return 0;
    }
    else{
      return state.selectedItems[index].quantity;
    }
    
    
    }
    const sumTotalAndItems = (product) => {
        const counterItems = product.reduce((acc, curr) => {
          return acc + curr.quantity;
        }, 0);
        const totalItems = product.reduce((acc, curr) => {
          return (acc + curr.price * curr.quantity);
        }, 0);
        return {counterItems , totalItems}
      };
    export{chechItemsquantity , sumTotalAndItems}