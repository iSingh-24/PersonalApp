import ACTIONS from '../context/actions';

const userReducer = (state, action) => {
    const userMap = new Map();

    userMap.set(ACTIONS.FETCH_USERS, { ...state, users: action.payload });
    userMap.set(ACTIONS.DELETE_USER, {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
    });

    userMap.set(ACTIONS.FETCH_SINGLE_USER, {
        ...state,
        singleUser: action.payload,
    });

    userMap.set(ACTIONS.UPDATE_USER, {
        ...state,
        users: state.users.map((user) => {
            return user.id === action.payload.id
                ? { ...user, ...action.payload }
                : user;
        }),
    });

    return userMap.has(action.type) ? userMap.get(action.type) : state;
};
