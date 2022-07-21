import { TInitializeVirtualCanvas } from "./initializeVirtualCanvas.interfaces";

const initializeVirtualCanvas: TInitializeVirtualCanvas = (
  canvas,
  text,
  height
) => {
  const virtualCanvas = document.createElement("canvas");
  const virtualCanvasCtx = virtualCanvas.getContext("2d");

  const canvasStyles = getComputedStyle(canvas);
  const font = `${height}px ${canvasStyles.fontFamily}`;

  virtualCanvasCtx.font = font;
  virtualCanvasCtx.textAlign = "center";
  virtualCanvas.width = virtualCanvasCtx.measureText(text).width;
  virtualCanvas.height = height;

  return { ctx: virtualCanvasCtx, ref: virtualCanvas, font };
};

export { initializeVirtualCanvas };
