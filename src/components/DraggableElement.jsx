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
  const { onResize, ref } = useDraggable({
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
        onDrag={(e) => {
          updateMoveable(id, {
            top: e.top,
            left: e.left,
            width,
            height,
            background,
          });
        }}
        onResize={onResize}
        // onResizeEnd={onResizeEnd}
        keepRatio={false}
        throttleResize={1}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
        edge={false}
        zoom={1}
        origin={false}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
      />
    </>
  );
};
