import { useState } from "react";
import Board from "./components/board";
import Col from "./components/col";
import NavBar from "./components/navBar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCardState } from "./customHooks/cardManage";



const testdata = [
  {
    id: 0,
    title: "title col name 1",
    cards: [
      {
        id: 0,
        title: "title card one",
        date: "1-20-2021",
        description: "desc one ",
      },
      {
        id: 1,
        title: "title card two",
        date: "1-20-2021",
        description: "desc two ",
      },
      {
        id: 2,
        title: "title card three",
        date: "1-20-2021",
        description: "three ",
      },
    ],
  },
  {
    id: 1,
    title: "title col name 2",
    cards: [
      {
        id: 0,
        title: "title card one",
        date: "1-20-2021",
        description: "desc one ",
      },
      {
        id: 1,
        title: "title card two",
        date: "1-20-2021",
        description: "desc two ",
      },
      {
        id: 2,
        title: "title card three",
        date: "1-20-2021",
        description: "three ",
      },
    ],
  },
  {
    id: 2,
    title: "title col name 3",
    cards: [
      {
        id: 0,
        title: "title card one",
        date: "1-20-2021",
        description: "desc one ",
      },
      {
        id: 1,
        title: "title card two",
        date: "1-20-2021",
        description: "desc two ",
      },
      {
        id: 2,
        title: "title card three",
        date: "1-20-2021",
        description: "three ",
      },
    ],
  },
];

function App() {
  const [colState, setColState] = useState(testdata);
  const [test, setTest] = useState(colState);

  console.log(colState);

  const newCol = (title) => {
    let length = colState.length;
    setColState([
      ...colState,
      {
        id: length,
        title: title,
        cards: [],
      },
    ]);
  };

  const newCard = (location, data) => {
    let len = colState[location].cards.length;
    let update = colState;
    let today = new Date();
    update[location].cards = [
      ...update[location].cards,
      {
        id: len,
        title: data.card_title,
        date: `${
          today.getMonth() + 1
        }-${today.getDate()}-${today.getFullYear()}`,
        description: data.description,
      },
    ];
    setColState(update);
    console.log(colState);
  };

  const [result, Test] = useCardState(colState[0].cards)
  const [dragId, setDragId] = useState();
  const moveCard = (card_id, destination) => {
    // const card_store = colState[dragId[0]].cards[dragId[1]]
    // const update = colState
    // delete update[dragId[0]].cards[dragId[1]]
    // let new_id = colState[destination].cards.length
    // console.log("new id",new_id)
    // card_store.id = new_id
    // update[destination].cards = [
    //   ...update[destination].cards, card_store
    // ]
    // setColState(update)
    
    console.log("hookTest",result)
  };

  console.log(dragId)

  return (
    <>
      <NavBar newCol={newCol} />
      <DndProvider backend={HTML5Backend}>
        <Board>
          {colState.map((col) => (
            <Col
              data={col}
              key={col.id}
              columnId={col.id}
              newCard={newCard}
              moveCard={moveCard}
              setDragId={setDragId}
              dragId={dragId}
            />
          ))}
        </Board>
      </DndProvider>
    </>
  );
}

export default App;
