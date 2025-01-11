import React, { useState } from "react";
import { useSelector } from "react-redux";
import {selectCards} from './cardsSlice';


export default function Card({ id }) {
  const card = useSelector((state) => selectCards(state)[id]); 
  const [flipped, setFlipped] = useState(false);
  if (!card) {
    return <div>Card not found</div>; 
  }
  return (
    <li>
      <button className="card" onClick={() => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
