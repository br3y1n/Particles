import { ComponentStory } from "@storybook/react";
import { buildTitle } from "../../shared/utils/buildTitle/build_title";
import LetterParticles from "../../../src/components/LetterParticles/LetterParticles";
import { ModulesEnum } from "../../shared/enums/modules";
import { ILetterParticlesProps } from "../../../src/components/LetterParticles/LetterParticles.interfaces";

const LETTER_PARTICLES_TITLE = buildTitle([
  ModulesEnum.COMPONENTS,
  LetterParticles,
]);

const LETTER_PARTICLES_ARGS_DEFAULT: ILetterParticlesProps = {
  text: "BRAYAYIN",
  height: 200,
};

const LetterParticlesWrapper: ComponentStory<typeof LetterParticles> = (
  args
) => <LetterParticles {...args} />;

export {
  LETTER_PARTICLES_TITLE,
  LETTER_PARTICLES_ARGS_DEFAULT,
  LetterParticlesWrapper as default,
};
