//
// const SET_USERS = 'SN/FRIENDS/SET_USERS';
// const SET_STATUS = 'SN/FRIENDS/SET_STATUS'; //redux ducks
//
// export const setUsers = (users) => ({type: SET_USERS, users: users});
// export const setStatus = (status) => ({type: SET_STATUS, status});
//
// export const statuses = {
//     NOT_INITIALIZED: 'NOT_INITIALIZED',
//     ERROR: 'ERROR',
//     INPROGRESS: 'INPROGRESS',
//     SUCCESS: 'SUCCESS'
// };
//
//
// let initialState = {
//     status: statuses.NOT_INITIALIZED,
//     users: []
// };
//
//
//
//
// const FriendsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_STATUS: {
//             return {
//                 ...state,
//                 status: action.status
//             }
//
//         }
//         case SET_USERS: {
//             return {
//                 ...state,
//                 users: action.users
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }
//
// export default FriendsReducer;

let initialState = {
    status: statuses.NOT_INITIALIZET,
    users: []
};

const FriendsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:{
            return {
                ...state, status: action.status
            }
        }
        case SET_USERS : {
            return {
                ...state, users: action.users
            }
        }
        default: {
            return state
        }
    }
}
