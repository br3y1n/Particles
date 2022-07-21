import { ICanvasData } from "../../LetterParticles.interfaces";

type TInitializeVirtualCanvas = (
  canvas: HTMLCanvasElement,
  text: string,
  height: number
) => ICanvasData;

export { TInitializeVirtualCanvas };
