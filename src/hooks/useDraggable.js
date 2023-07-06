import { useRef } from "react";

export const useDraggable = () => {
  const ref = useRef();

  const onDrag = async (e) => {
    e.target.style.transform = e.transform;
  };

  const onResize = async (e) => {
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
    e.target.style.transform = e.drag.transform;
  };

  return { ref, onDrag, onResize };
};
