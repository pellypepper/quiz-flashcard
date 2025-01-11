import {createSlice} from '@reduxjs/toolkit';
import { addQuiz } from '../quizzes/quizzesSlice';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
        quizzes: {}
    },
    reducers: {
        addTopics: (state, action) =>{
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: [], 
              };
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(addQuiz, (state, action) => {
            const { id, topicId } = action.payload; // Destructure id and topicId from the action payload
            if (state.topics[topicId]) {
              // Check if the topic exists
              state.topics[topicId].quizIds.push(id); // Add the quiz id to the topic's quizIds
            }
          });
      },
});
export const selectTopics = (state) => state.topics.topics;


export const { addTopics } = topicsSlice.actions;
export default topicsSlice.reducer;