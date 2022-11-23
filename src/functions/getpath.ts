import path from "path";

export function imagespath() : string {

  return path.join(process.cwd(), "images");
}

export function tmppath(): string {
  return path.join(process.cwd(), "tmp");
}
