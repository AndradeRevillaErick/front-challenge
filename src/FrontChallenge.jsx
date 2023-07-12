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
      <button className="addBtn" onClick={addMoveable}>
        ADD
      </button>
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
          />
        ))}
      </div>
    </main>
  );
};
