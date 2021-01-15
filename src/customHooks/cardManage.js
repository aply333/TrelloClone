import { useState } from "react";

export function useCardState(initialState) {
  const [cardState, setCardState] = useState(initialState);

  const idCorrection = (arr) => {
    console.log("input data: ", arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id !== i) {
        arr.id = i;
      }
    }
    console.log("idCorrection Return:",arr)
    return arr;
  };

  function insertNewColumn(column_title) {
    let new_id = cardState.length;
    setCardState([
      ...cardState,
      {
        id: new_id,
        title: column_title,
        cards: [],
      },
    ]);
  }

  function insertNewCard(location, contents) {
    const new_id = cardState[location].cards.length;
    const update = cardState;
    const today = new Date();
    update[location].cards = [
      ...update[location].cards,
      {
        id: new_id,
        title: contents.card_title,
        date: `${
          today.getMonth() + 1
        }-${today.getDate()}-${today.getFullYear()}`,
        description: contents.description,
      },
    ];
    setCardState(update);
  }

  function relocateCard(dragId, destination) {
    const column_Id = dragId[0];
    const card_Id = dragId[1];
    if (destination !== column_Id) {
      const card_store = cardState[column_Id].cards[card_Id];
      const update = cardState;
      card_store.id = update[destination].cards.length;
      update[destination].cards = [...update[destination].cards, card_store];
      update[column_Id].cards.splice(card_Id, 1);
      const old_ids = update[column_Id].cards;
      const idUpdate = idCorrection(old_ids);
      update[column_Id].cards = idUpdate;
      setCardState(update);
    }
  }

  function relocateColumn(column_Id, destination) {
    if(column_Id !== destination){
      const column_store = cardState[column_Id]
      const update = cardState
      update.splice(column_Id, 1)
      update.splice(destination, 0, column_store)
      const idUpdate = idCorrection(update)
      setCardState(idUpdate)
      console.log("New Card State",cardState)
    }
    else{
      console.log("Card State Stayed")
    }
  }

  return [cardState, insertNewColumn, insertNewCard, relocateCard, relocateColumn];
}
