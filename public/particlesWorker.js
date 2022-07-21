onmessage = ({ data }) => {
  const x = _getPoints(data, 0.5);

  postMessage(x);
};

const _getPoints = (stroke, ratio) => {
  const rgbaData = stroke.data,
    skillfulPixels = [],
    movingPoints = [],
    STROKE_WITDH = stroke.width,
    getPositionX = (rgbaDataPos) => (rgbaDataPos % (4 * STROKE_WITDH)) / 4,
    getPositionY = (rgbaDataPos) =>
      Math.floor(rgbaDataPos / (4 * STROKE_WITDH));

  for (let i = 0; i < rgbaData.length; i += 4) {
    const [r, g, b, a] = [
      rgbaData[i],
      rgbaData[i + 1],
      rgbaData[i + 2],
      rgbaData[i + 3],
    ];

    if (r === 255 && g === 255 && b === 255 && a === 255)
      skillfulPixels.push({
        x: getPositionX(i),
        y: getPositionY(i),
      });
  }

  const SKILLFUL_PIXELS_LENGTH = skillfulPixels.length,
    NUMBER_POINTS = parseInt((SKILLFUL_PIXELS_LENGTH * ratio) / 100),
    generateRandomPoint = () => {
      const skillfulRandomPosition =
          skillfulPixels[Math.floor(Math.random() * skillfulPixels.length)],
        ramdomDirection = () => Math.floor(Math.random() * 2 - 1) || 1;

      movingPoints.push({
        x: skillfulRandomPosition.x,
        y: skillfulRandomPosition.y,
        directionX: ramdomDirection(),
        directionY: ramdomDirection(),
      });
    };

  for (let i = 0; i < NUMBER_POINTS; i++) {
    generateRandomPoint();
  }

  return movingPoints;
};
