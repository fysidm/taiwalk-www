import axios from 'axios';
import jsSHA from 'jssha';

import createDataContext from './createDataContext';
import { API_URL, APP_ID, APP_KEY } from '../constants';

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TOP_ACTIVITIES':
      return { ...state, topActivities: action.payload };
    case 'GET_TOP_SCENIC_SPOTS':
      return { ...state, topScenicSpots: action.payload };
    case 'GET_TOP_RESTAURANTS':
      return { ...state, topRestaurants: action.payload };
    default:
      return state;
  }
};

const getAuthorizationHeader = () => {
  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(APP_KEY, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

  return {
    Authorization,
    'X-Date': GMTString,
  };
};

const getTopActivities = (dispatch) => {
  return (callback) => {
    axios
      .get(
        `${API_URL}/Activity?$top=4&$format=JSON&$filter=Picture/PictureUrl1 ne null`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then(({ data }) => {
        dispatch({ type: 'GET_TOP_ACTIVITIES', payload: data });
      });
  };
};

const getTopScenicSpots = (dispatch) => {
  return (callback) => {
    axios
      .get(
        `${API_URL}/ScenicSpot?$top=4&$format=JSON&$filter=City ne null and Picture/PictureUrl1 ne null`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then(({ data }) => {
        dispatch({ type: 'GET_TOP_SCENIC_SPOTS', payload: data });
      });
  };
};

const getTopRestaurants = (dispatch) => {
  return (callback) => {
    axios
      .get(
        `${API_URL}/Restaurant?$top=4&$format=JSON&$filter=City ne null and Picture/PictureUrl1 ne null`,
        {
          headers: getAuthorizationHeader(),
        }
      )
      .then(({ data }) => {
        dispatch({ type: 'GET_TOP_RESTAURANTS', payload: data });
      });
  };
};

export const { Context, Provider } = createDataContext(
  dataReducer,
  {
    getTopActivities,
    getTopScenicSpots,
    getTopRestaurants,
  },
  {}
);
