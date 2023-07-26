import Moveable from "react-moveable";
import { useDraggable } from "../hooks/useDraggable";

export const DraggableElement = ({
  id,
  top,
  left,
  width,
  height,
  background,
  setSelected,
  isSelected = false,
}) => {
  const { ref, onDrag, onResize, onRotate } = useDraggable();

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
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        onClick={() => setSelected(id)}
      />

      <Moveable
        target={isSelected && ref.current}
        resizable
        draggable
        rotatable
        origin={false}
        onDrag={(e) => {
          onDrag(e);
        }}
        keepRatio={true}
        snappable={true}
        snapThreshold={15}
        onResize={onResize}
        onRotate={onRotate}
        rotationPosition={"top"}
        verticalGuidelines={[50, 150, 250, 450, 550]}
        horizontalGuidelines={[0, 100, 200, 400, 500]}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
        bounds={{ left: 17, top: 17, right: -10, bottom: -10, position: "css" }}
      />
    </>
  );
};
