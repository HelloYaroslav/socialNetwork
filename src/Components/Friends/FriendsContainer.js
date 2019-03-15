import React from 'react';
import {connect} from 'react-redux';
import Friends from "./Friends";


let mapStateToProps = (state) => {
    return {
        users: state.friends.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer
