import { ILetterParticlesProps } from "./LetterParticles.interfaces";
import { FC } from "react";
import { useLetterParticlesState } from "./hook/useLetterParticlesState";

const LetterParticles: FC<ILetterParticlesProps> = (props) => {
  const { className } = props;
  const { ref } = useLetterParticlesState(props);

  return <canvas ref={ref} className={className} />;
};

export default LetterParticles;
