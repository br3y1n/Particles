import { ICanvasData } from "../../LetterParticles.interfaces";

const _drawPoint = (ctx, color, point, pointer) => {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(point.x, point.y, pointer, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
};

const _isntInsineLine = (x, y, stroke) =>
  stroke.data[(stroke.width * y + x) * 4] !== 255;

const _changeDirectionsIfApplicable = (point, cv, stroke) => {
  ["x", "y"].forEach((axe) => {
    const NEXT_COORD_X = point.x + point.directionX,
      NEXT_COORD_Y = point.y + point.directionY,
      CURRENT_POSITION = point[axe] + point[`direction${axe.toUpperCase()}`],
      CHANGE_APPLY =
        axe === "x"
          ? CURRENT_POSITION >= cv.width ||
            CURRENT_POSITION < 0 ||
            _isntInsineLine(NEXT_COORD_X, point.y, stroke)
          : CURRENT_POSITION >= cv.height ||
            CURRENT_POSITION < 0 ||
            _isntInsineLine(point.x, NEXT_COORD_Y, stroke);

    if (CHANGE_APPLY) {
      point[`direction${axe.toUpperCase()}`] *= -1;
      point[axe] += point[`direction${axe.toUpperCase()}`] * 2;
    }
  });
};

const _movePoints = (cv, ctx, movingPoints, stroke, line) => {
  const COLOR = getComputedStyle(cv).color;

  ctx.clearRect(0, 0, cv.width, cv.height);

  movingPoints.forEach((point, currentIdx) => {
    _drawPoint(ctx, COLOR, point, line.pointer);
    _changeDirectionsIfApplicable(point, cv, stroke);

    movingPoints.forEach((otherPoint, otherIdx) => {
      if (otherPoint === point || currentIdx >= otherIdx) return;

      const HYPOTENUSE = Math.sqrt(
        Math.pow(point.x - otherPoint.x, 2) +
          Math.pow(point.y - otherPoint.y, 2)
      );

      if (HYPOTENUSE < line.real) {
        ctx.lineWidth =
          HYPOTENUSE < line.ratio ? line.minorWidth : line.higherWidth;
        ctx.beginPath();
        ctx.strokeStyle = COLOR;
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(otherPoint.x, otherPoint.y);
        ctx.stroke();
      }
    });

    point.x += point.directionX;
    point.y += point.directionY;
  });
};

const startParticlesByWorker = (sketch, canvas: ICanvasData) => {
  const lineRange = 20;
  const line = {
    real: lineRange,
    ratio: lineRange * 0.4,
    higherWidth: lineRange * 0.005,
    minorWidth: lineRange * 0.009,
    pointer: lineRange * 0.05,
  };

  const particlesWorker = new Worker("particlesWorker.js");
  particlesWorker.postMessage(sketch);

  particlesWorker.onmessage = ({ data: movingPoints }) => {
    setInterval(() => {
      _movePoints(canvas.ref, canvas.ctx, movingPoints, sketch, line);
    }, 75);
  };
};

export { startParticlesByWorker };
