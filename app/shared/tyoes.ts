import { ReactNode } from "react";
import { IButton } from "./buttons/Button";

export interface IEmptyState {
    title?: string;
    subtitle?: string;
    btnProps?: IButton | null;
    icon?: ReactNode;
  }