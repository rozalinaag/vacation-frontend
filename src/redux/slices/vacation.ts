import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await axios.get('/posts');
    return data;
});

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
    const {data} = await axios.get('/tags');
    return data;
});

type Props = {
    posts: { items: string[], status: string },
    tags: { items: string[], status: string },
    selectedYear: string,
    selectedDates: any,
    selectedStatement: string,
    selectedNewDate: any
}
const initialState: Props = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading'
    },
    selectedYear: '2023',
    selectedDates: [],
    selectedStatement: '',
    selectedNewDate: [],
}

const slice = createSlice({
    name: 'vacation',
    initialState,
    reducers: {
        setSelectedYear(state, action: PayloadAction<string>) {
            state.selectedYear = action.payload;
        },
        setSelectedDates(state, action: PayloadAction<any>){
            state.selectedDates = action.payload;
        },
        setSelectedStatement(state, action: PayloadAction<string>){
            state.selectedStatement = action.payload;
        },
        setSelectedNewDate(state, action: PayloadAction<any>){
            state.selectedNewDate = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.posts.items = [];
            state.posts.status = 'loading';
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        })
        builder.addCase(fetchTags.pending, (state) => {
            state.tags.items = [];
            state.tags.status = 'loading';
        })
        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.tags.items = action.payload;
            state.tags.status = 'loaded';
        })
        builder.addCase(fetchTags.rejected, (state) => {
            state.tags.items = [];
            state.tags.status = 'error';
        })
    }
});

export const {setSelectedYear, setSelectedNewDate, setSelectedDates, setSelectedStatement} = slice.actions;
export const vacationReducer = slice.reducer;