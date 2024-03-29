
import com from '../humanSlice';
// import counterSlice from '../counterSlice';
// import reducer from './reducer'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: com
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
