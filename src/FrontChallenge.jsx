import { DraggableElement } from "./components/DraggableElement";
import { useFront } from "./hooks/useFront";

export const FrontChallenge = () => {
  const {
    selected,
    setSelected,
    addMoveable,
    deleteMoveable,
    updateMoveable,
    handleResizeStart,
    moveableComponents,
  } = useFront();

  return (
    <main>
      <button onClick={addMoveable}>Add Moveable1</button>
      <button onClick={deleteMoveable}>Delete Moveable1</button>
      <div
        id="parent"
        style={{
          position: "relative",
          background: "#232323",
          height: "65vh",
          width: "65vw",
        }}
      >
        {moveableComponents.map((item, index) => (
          <DraggableElement
            {...item}
            key={index}
            updateMoveable={updateMoveable}
            handleResizeStart={handleResizeStart}
            setSelected={setSelected}
            isSelected={selected === item.id}
          />
        ))}
      </div>
    </main>
  );
};
