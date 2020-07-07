//TODO: create contact using all actions

import {
  SET_CONTACT,
  SET_LOADING,
  CONTACT_TO_UPDATE,
  SET_SINGLE_CONTACT
} from "./action.types";

//TODO: use switch case
export default (state,actions)=>{
  switch (actions.type) {
      case SET_CONTACT:
          return actions.payload == null ? {...state, contact:[]} :{...state, contacts: actions.payload}
      case SET_LOADING:
          return {...state, isLoading: actions.payload}
      case CONTACT_TO_UPDATE:
          return {...state, 
          contactToUpdate: actions.payload,
          contactToUpdateKey: actions.key
        }
      case SET_SINGLE_CONTACT:
        return {...state, 
          contact: actions.payload
        }
      default:
          break;
  }
}
