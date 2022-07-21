import { render, screen } from "@testing-library/react";
import LetterParticles from "./LetterParticles";

describe("LetterParticles test:", () => {
  it("", () => {
    render(<LetterParticles />);

    expect(screen.getByText("LetterParticles")).toBeDefined();
  });
});
