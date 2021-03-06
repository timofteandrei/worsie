import * as types from '../constants/user';
// import fetch from 'isomorphic-fetch';
// import profile from '../dummy/profile';
import axios from 'axios';




const hostName="206.189.30.132:3000";

export function getUserInfo(){
  
  const token = localStorage.getItem("token");
  let apiLink = `http://${hostName}/api/user?token=${token}`;

  return dispatch => {

    axios.get(apiLink)
      .then(function(response){
          
          // profile.profile.name = response.data.user.name;
          // console.log(response.data);

          if (response.data.success === true){
              dispatch({type: types.USER, user: response.data.user});
          }
      });
    
  };
}	