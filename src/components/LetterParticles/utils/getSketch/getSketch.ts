import { TGetSketch } from "./getSketch.interfaces";

const getSketch: TGetSketch = ({ ref: cv, ctx, font }, text) => {
  ctx.beginPath();
  ctx.fillStyle = "#000";
  ctx.rect(0, 0, cv.width, cv.height);
  ctx.fill();
  ctx.font = font;
  ctx.textAlign = "left";
  ctx.fillStyle = "#fff";
  ctx.fillText(text, 0, cv.height);
  ctx.closePath();

  return ctx.getImageData(0, 0, cv.width, cv.height);
};

export { getSketch };
