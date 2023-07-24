import { API } from '../../API';
import * as actionType from '../actionsType/car';

export const actionStartGetData = () => ({
  type: actionType.START_GET_DATA,
});

export const actionFinishGetData = () => ({
  type: actionType.FINISH_GET_DATA,
});

export const actionSetData = (data) => ({
  type: actionType.SET_DATA,
  data
});

export const actionSetDataDetail = (data) => ({
  type: actionType.SET_DETAIL_DATA,
  data
})

export const setData = (params) => async (dispatch) => {
  dispatch(actionStartGetData()) //membuat loading jadi true
  const parameter = `name=${params.name}&category=${params.category}&isRented=${params.isRented}&${params.price}`
  try {
    const response = await API.get(`admin/v2/car?${parameter}&page=1&pageSize=10`)
    dispatch(actionSetData(response.data.cars))
  } catch (error) {
    console.error('err', error)
  }
  dispatch(actionFinishGetData()) //membuat loading jadi false
}

export const setDataDetail = (id) = async (dispatch) => {
  dispatch(actionStartGetData()) //membuat loading jadi true
  try {
    const response = await API.get(`admin/v2/car?${id}&page=1&pageSize=10`)
    dispatch(actionSetDataDetail(response.data.car))
  } catch (error) {
    console.error('err', error)
  }
  dispatch(actionFinishGetData())
}