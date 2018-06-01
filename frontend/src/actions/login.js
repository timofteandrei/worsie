import * as types from '../constants/login';
import axios from 'axios';



const hostName="206.189.30.132:3000";
const apiLink = `http://${hostName}/authenticate`;


export function startLogin(obj) {
  return dispatch => {

        
        dispatch({
          type: types.LOGIN_START
        });    

        //here comes server call

         axios.post(apiLink, obj)
            .then(function (response) {
               
               // console.log(response.data);
               if (response.data.success === true){

                    localStorage.setItem('token', response.data.token);

                    dispatch({
                        type: types.LOGIN_SUCCESS,
                        token: response.data.token,
                        success: true
                    });
                    
                }
                else{
                    dispatch({
                        type: types.LOGIN_FAILED,
                        success: false,
                        message: response.data.message
                    });  
                }
            });
            // .catch(function (error) {
            //     // console.log(error);
            // });

       };
}
