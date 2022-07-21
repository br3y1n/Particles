import { TInitializeCanvas } from "./initializeCanvas.interfaces";

const initializeCanvas: TInitializeCanvas = (canvas, width, height) => {
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  return { ref: canvas, ctx };
};

export { initializeCanvas };
