import { useCallback } from "react";
import { ILetterParticlesProps } from "../LetterParticles.interfaces";
import {
  IUseLetterParticlesState,
  TCanvasRef,
} from "./useLetterParticlesState.interfaces";
import { initializeVirtualCanvas } from "../utils/initializeVirtualCanvas/initializeVirtualCanvas";
import { initializeCanvas } from "../utils/initializeCanvas/initializeCanvas";
import { getSketch } from "../utils/getSketch/getSketch";
import { startParticlesByWorker } from "../utils/startParticles/startParticlesByWorker";

const useLetterParticlesState = ({
  height,
  text,
}: ILetterParticlesProps): IUseLetterParticlesState => {
  const ref = useCallback<TCanvasRef>((canvas) => {
    if (!!canvas) {
      const virtualCanvas = initializeVirtualCanvas(canvas, text, height);
      const sketch = getSketch(virtualCanvas, text);
      const realCanvas = initializeCanvas(
        canvas,
        virtualCanvas.ref.width,
        height
      );

      startParticlesByWorker(sketch, realCanvas);
    }
  }, []);

  return { ref };
};

export { useLetterParticlesState };
