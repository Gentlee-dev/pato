export type Palete = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type JustifyContent =
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between";
export type AlignItems = "items-center" | "items-start" | "items-end";

export interface RadioForm {
  idx: number;
  label: string;
  id: string;
}
export interface Option {
  title: string;
  option: RadioForm[];
}
