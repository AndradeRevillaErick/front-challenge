import { DraggableElement } from "./components/DraggableElement";
import { useFront } from "./hooks/useFront";

export const FrontChallenge = () => {
  const {
    selected,
    setSelected,
    addMoveable,
    deleteMoveable,
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
          height: "65vh",
          width: "65vw",
        }}
      >
        {moveableComponents.map((item, index) => (
          <DraggableElement
            {...item}
            key={index}
            setSelected={setSelected}
            isSelected={selected === item.id}
          />
        ))}
      </div>
    </main>
  );
};
