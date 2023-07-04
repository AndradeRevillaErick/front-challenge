import Moveable from "react-moveable";
import { useDraggable } from "../hooks/useDraggable";

export const DraggableElement = ({
  updateMoveable,
  top,
  left,
  width,
  height,
  index,
  background,
  id,
  setSelected,
  isSelected = false,
  updateEnd,
}) => {
  const { onDrag, onResize, ref } = useDraggable({
    id,
    top,
    left,
    width,
    height,
    index,
    background,
    updateMoveable,
  });

  return (
    <>
      <div
        ref={ref}
        className="draggable"
        id={"component-" + id}
        style={{
          position: "absolute",
          top: top,
          left: left,
          width: width,
          height: height,
          background: background,
        }}
        onClick={() => setSelected(id)}
      />

      <Moveable
        target={isSelected && ref.current}
        resizable
        draggable
        origin={false}
        onDrag={onDrag}
        snappable={true}
        snapThreshold={15}
        onResize={onResize}
        verticalGuidelines={[50, 150, 250, 450, 550]}
        horizontalGuidelines={[0, 100, 200, 400, 500]}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
        bounds={{ left: 5, top: 5, right: 5, bottom: 5, position: "css" }}
      />
    </>
  );
};
