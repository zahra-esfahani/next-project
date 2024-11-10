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
        const itemsCounter = product.reduce((acc, curr) => {
          return acc + curr.quantity;
        }, 0);
        const total = product.reduce((acc, curr) => {
          return (acc + curr.price * curr.quantity);
        }, 0);
        return {itemsCounter , total}
      };
    export{chechItemsquantity , sumTotalAndItems}