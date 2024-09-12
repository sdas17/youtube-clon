import { createSlice } from "@reduxjs/toolkit";
import {offset_livechat} from '../Utils/Constant';
const ChatSlice = createSlice({
    name: "chat",  // This should be consistent with the slice name.
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.slice(offset_livechat,1)
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;
