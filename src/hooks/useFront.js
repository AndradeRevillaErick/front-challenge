import { useState } from "react";
import { getImage } from "../helpers/getImage";

export const useFront = () => {
  const [moveableComponents, setMoveableComponents] = useState([]);
  const [selected, setSelected] = useState(null);

  const addMoveable = async () => {
    const rndImage = await getImage();
    setMoveableComponents([
      ...moveableComponents,
      {
        id: Math.floor(Math.random() * Date.now()),
        top: 7,
        left: 7,
        width: 100,
        height: 100,
        background: `url(${rndImage.imagenPng})`,
      },
    ]);
  };

  const deleteMoveable = () => {
    setMoveableComponents(
      moveableComponents.filter((element) => element.id !== selected)
    );
  };

  return {
    selected,
    setSelected,
    addMoveable,
    deleteMoveable,
    moveableComponents,
  };
};
