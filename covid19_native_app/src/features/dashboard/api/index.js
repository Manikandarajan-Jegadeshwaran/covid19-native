// export const getToken = deviceId => {
//   return dispatch => {
//     dispatch(LoginActions.setLoggedIn(false));

//     loginService
//       ?.authenticateByDeviceId("1c7d227031ee9dfc")
//       .then(res => {
//         if (res) {
//           GlobalActions.setToken(JSON.stringify(res?.data)).then(() => {
//             dispatch(LoginActions.setLoggedIn(true));
//             dispatch(LoginActions.setRegDeviceStatus(true));
//             console.log("token stored");
//           });
//         }
//       })
//       .catch(err => {
//         dispatch(LoginActions.setLoggedIn(false));
//         dispatch(LoginActions.setRegDeviceStatus(false));
//       });
//   };
// };
