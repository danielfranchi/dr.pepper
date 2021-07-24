import { TypesUser, arrayUsertList } from "./types"

const initialStateToken: arrayUsertList = {
  aa: false
};

function reducerUser(state = initialStateToken, action: any) {
  switch (action.type) {

    case TypesUser.GET_USER:
      return {
        aa: action.payload,
      };

    default:
      return state
  }
}

export default reducerUser
