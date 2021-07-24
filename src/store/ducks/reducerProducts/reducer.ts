import { TypesProduct, arrayProductList } from "./types"

const initialStateToken: arrayProductList = {
  aa: false
};

function reducerProduct(state = initialStateToken, action: any) {
  switch (action.type) {
    case TypesProduct.GET_PRODUCTS:
      return {
        aa: action.payload,
      };

    default:
      return state
  }
}

export default reducerProduct
