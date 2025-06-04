import { IconType } from "react-icons";

export type LabelType = {
    label?: string;
    icon?: IconType;
    url?: string;
    schemaUrl?: string;
  };
  
  export type BreadcrumbType = LabelType[];