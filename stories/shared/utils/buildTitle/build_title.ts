import { TPaths } from "./build_title.interfaces";

const buildTitle = (paths: TPaths): string =>
  paths
    .map((path) => (typeof path === "string" ? path : path.displayName))
    .join("/");

export { buildTitle };
