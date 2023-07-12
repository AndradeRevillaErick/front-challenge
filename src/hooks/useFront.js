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

  const addMoveableT2 = async () => {
    const rndImage = await getImage();
    setMoveableComponents([
      ...moveableComponents,
      {
        id: Math.floor(Math.random() * Date.now()),
        background: `url(${rndImage.imagenPng})`,
      },
    ]);
  };

  const deleteMoveable = () => {
    console.log(moveableComponents);
    setMoveableComponents(
      moveableComponents.filter((element) => element.id !== selected)
    );
  };

  const updateMoveable = (id, newComponent) => {
    const updatedMoveables = moveableComponents.map((moveable, i) => {
      if (moveable.id === id) {
        return { id, ...newComponent };
      }
      return moveable;
    });
    console.log(updatedMoveables);
    setMoveableComponents(updatedMoveables);
  };

  return {
    selected,
    setSelected,
    addMoveable,
    updateMoveable,
    deleteMoveable,
    moveableComponents,
    addMoveableT2,
  };
};
