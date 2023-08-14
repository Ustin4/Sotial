import {applyMiddleware, combineReducers, createStore, legacy_createStore, Store} from "redux";
import dialogsReducer, {ActionMessagesTypes} from "./dialogs-reducer";
import profileReducer, {ActionPostTypes} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {ActionFollowTypes} from "./users-reducer";
import authReducer, {ActionAuthTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'


export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

export type DialogType = {
    id: number;
    name: string;
}

export type MessageType = {
    id: number;
    messages: string;
}

export type FriendType = {
    id: number;
    name: string;
}

export type ProfilePageType = {
    contacts: any;
    photos: {
        small: string | null;
        large: string | null;
    };
    posts: Array<PostType>;
    newPostText: string;
    profile: string
    status:string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessagesText: string;
}

export type SitebarType = {
    Friend: Array<FriendType>;
}

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SitebarType;
    usersPage: any
    auth: any

}

// export type StoreType = {
//     _state: StateType
//     _callSubscriber: (_state: StateType) => void
//     subscribe: (observer: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionTypes) => void
// }

type ReducersType = typeof reducers
export type AppRootStateType = ReturnType<ReducersType>

export type ActionTypes = ActionPostTypes
    | ActionMessagesTypes
    | ActionFollowTypes
    | ActionAuthTypes


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));


export default store