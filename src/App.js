import { useState } from "react";
import Board from "./components/board";
import Col from "./components/col";
import NavBar from "./components/navBar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCardState } from "./customHooks/cardManage";
import DeleteBin from "./components/subComponents/deleteBin";
import BinContents from "./components/subComponents/binContents";


const testdata = [
  {
    id: 0,
    title: "Open Task",
    cards: [
      {
        id: 0,
        title: "Stylize",
        date: "1-20-2021",
        description: "Lets make the website pretty",
      },
      {
        id: 1,
        title: "Back-end",
        date: "1-20-2021",
        description: "We need data persitence, and availabilty.",
      },
      {
        id: 2,
        title: "Clean",
        date: "1-20-2021",
        description: "The Code, let's make sure its not spaghetti. ",
      },
    ],
  },
  {
    id: 1,
    title: "In Progress",
    cards: [
      {
        id: 0,
        title: "Delete Functionality",
        date: "1-20-2021",
        description: "Users should be able to remove columns and cards.",
      },
      {
        id: 1,
        title: "Improve Sample Data",
        date: "1-20-2021",
        description: "Sample data needs to show how a trello board works. ",
      },
      {
        id: 2,
        title: "Organize Stylings",
        date: "1-20-2021",
        description: "Remove none js dependent stylings from js styles. ",
      },
    ],
  },
  {
    id: 2,
    title: "Completed",
    cards: [
      {
        id: 0,
        title: "Click and Drag Functionality",
        date: "1-20-2021",
        description: "Cards and columns can be moved and edited. ",
      },
      {
        id: 1,
        title: "Fix Id Function",
        date: "1-20-2021",
        description: "Fix bug where Id are not updating appropriatley.",
      },
      {
        id: 2,
        title: "Build State Splice Methods",
        date: "1-20-2021",
        description: "Make state data reflect what users want to happen.",
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
    relocateColumn,
    removedCards,
    removedColumns,
    binCard,
    binColumn
  ] = useCardState(testdata);

  const [dragId, setDragId] = useState();

  const [bin, setBin] = useState(false)

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

  const handleRemove = (id) => {
    if(id[2] === "card"){
      binCard(id[0], id[1])
    }
    if(id[2]=== "col"){
      binColumn(id[0])
    }
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
          <DeleteBin
            dragId={dragId}
            handleRemove={handleRemove}
            setBin={setBin}
          />
          {bin? <BinContents removedCards={removedCards} removedColumns={removedColumns} setBin={setBin}/> : null}
        </Board>
      </DndProvider>
    </>
  );
}

export default App;
