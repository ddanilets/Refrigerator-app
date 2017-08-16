import { cloneDeep } from 'lodash';
import * as constants  from './constants'
import initialState from './initialState';
import * as utils from './utils';

export default function(state = initialState, action) {
  const newState = cloneDeep(state);
  switch (action.type) {
    case constants.CREATE_PRODUCT:
      if (utils.checkProductForExistance(newState.products, action.payload)) {
        break;
      }
      newState.products.push(action.payload);
      break;
    case constants.DELETE_PRODUCT:
      if (!utils.checkProductForExistance(newState.products, action.payload)) {
        break;
      }
      newState.products = newState.products.filter(el => el.id !== action.payload.id);
      break;
    case constants.UPDATE_PRODUCT:
      if (!utils.checkProductForExistance(newState.products, action.payload)) {
        break;
      }
      newState.products = newState.products.map(el => {
        if (el.id !== action.payload.id) {
          return el;
        }
        return el.updateFields(action.payload);
      });
      break;
    default:
      break;
  }
  newState.lastUpdated = new Date().getDate();
  return newState;
}