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

  const [
    cardState,
    insertNewColumn,
    insertNewCard,
    relocateCard,
    relocateColumn
  ] = useCardState(testdata);
  const [dragId, setDragId] = useState();

  const newCol = (title) => {
    insertNewColumn(title);
  };

  const newCard = (location, data) => {
    insertNewCard(location, data);
  };

  
  const moveCard = (destination) => {
    relocateCard( dragId, destination);
  };

  const moveColumn =(destination) =>{
    relocateColumn(dragId[0], destination)
  }

  return (
    <>
      <NavBar newCol={newCol} />
      <DndProvider backend={HTML5Backend}>
        <Board>
          {cardState.map((col) => (
            <Col
              data={col}
              key={col.id}
              columnId={col.id}
              newCard={newCard}
              moveCard={moveCard}
              moveColumn={moveColumn}
              setDragId={setDragId}
            />
          ))}
        </Board>
      </DndProvider>
    </>
  );
}

export default App;
