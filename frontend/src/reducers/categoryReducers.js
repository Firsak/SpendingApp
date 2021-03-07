import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,

  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_SUCCESS,

  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_RESET,

} from "../constants/categoryConstants";

export const categoryListReducer = (state = {categories: []}, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return {
        loading: true,
        categories: [],
      }

    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      }

    case CATEGORY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const categoryDetailsReducer = (state = {category: {transactions: []}}, action) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return {
        loading: true,
        category: [],
      }

    case CATEGORY_DETAILS_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      }

    case CATEGORY_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}


export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
      return {
        loading: true,
      }

    case CATEGORY_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      }

    case CATEGORY_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false
      }

    case CATEGORY_DELETE_RESET:
    return {}

    default:
      return state
  }
}