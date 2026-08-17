import type {propina, propinas} from "../types/propinas";
export interface inputProps {
    label: string;
    value: propina;
    name: propinas;
    Onchange: (name:propinas, value: string) => void;
};