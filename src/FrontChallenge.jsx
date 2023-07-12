import { DraggableElement } from "./components/DraggableElement";
import { useFront } from "./hooks/useFront";

export const FrontChallenge = () => {
  const {
    selected,
    setSelected,
    addMoveable,
    updateMoveable,
    deleteMoveable,
    moveableComponents,
    addMoveableT2,
  } = useFront();

  // console.log(moveableComponents);

  return (
    <main>
      <button className="addBtn" onClick={addMoveable}>
        ADD
      </button>
      {/* <button onClick={addMoveableT2}>Add Moveable1</button> */}
      <button className="deleteBtn" onClick={deleteMoveable}>
        DELETE
      </button>
      <div
        id="parent"
        style={{
          position: "relative",
          height: "65vh",
          width: "65vw",
        }}
      >
        {moveableComponents.map((item) => (
          <DraggableElement
            {...item}
            key={item.id}
            setSelected={setSelected}
            isSelected={selected === item.id}
            updateMoveable={updateMoveable}
          />
        ))}
      </div>
    </main>
  );
};
