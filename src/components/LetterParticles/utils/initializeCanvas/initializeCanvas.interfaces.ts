import { ICanvasData } from "../../LetterParticles.interfaces";

type TInitializeCanvas = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
) => ICanvasData;

export { TInitializeCanvas };
