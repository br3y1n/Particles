interface ILetterParticlesProps {
  className?: string;
  height: number;
  text: string;
}

interface ICanvasData {
  ctx: CanvasRenderingContext2D;
  ref: HTMLCanvasElement;
  font?: string;
}

export { ILetterParticlesProps, ICanvasData };
