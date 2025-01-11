import {createSlice} from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) =>{
            const {id, front, back} = action.payload;
            state.cards[id] = {
                id,
                front,
                back,
            }
        }
    }
});


export const selectCards = (state) => state.cards.cards;
export default cardsSlice.reducer;
export const { addCard } = cardsSlice.actions;