import { createSlice} from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'ahmed shawareb'
        }
    },
    reducers: {
        getUser: (state: any): void =>  {
            return state.user;
        }
    }
})

export const { getUser } = user.actions;
export const userReducer = user.reducer;

export default user;
