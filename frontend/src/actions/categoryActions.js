import axios from "axios";
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

  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_REQUEST,

} from "../constants/categoryConstants";

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({type: CATEGORY_LIST_REQUEST})

    const {data} = await axios.get('/api/categories/')

    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}


export const getCategoryDetails = (id) => async (dispatch) => {
  try {
    dispatch({type: CATEGORY_DETAILS_REQUEST})

    const {data} = await axios.get(`/api/categories/${id}/`)

    dispatch({
      type: CATEGORY_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}


export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({type: CATEGORY_DELETE_REQUEST})

    const {data} = await axios.delete(`/api/categories/delete/${id}/`)

    dispatch({
      type: CATEGORY_DELETE_SUCCESS,
    })

  } catch (error) {
    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}


export const createCategory = (category) => async (dispatch) => {
  try {
    dispatch({type: CATEGORY_CREATE_REQUEST})

    const {data} = await axios.post(
      `/api/categories/create/`,
      category
    )

    dispatch({
      type: CATEGORY_CREATE_SUCCESS,
    })

  } catch (error) {
    dispatch({
      type: CATEGORY_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    })
  }
}