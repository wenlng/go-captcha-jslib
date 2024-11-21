
export interface ButtonConfig {
  width?: number;
  height?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
}

export interface ButtonState {
  type?: ButtonType;
  disabled?: boolean;
  title?: string;
  clickEvent?: () => void;
}

export const defaultConfig = ():ButtonConfig => ({
  width: 330,
  height: 44,
  verticalPadding: 12,
  horizontalPadding: 16,
})

export const defaultState = ():ButtonState => ({
  type: "default",
  disabled: false,
  title: "Click Button",
  clickEvent: () => {}
})

export type ButtonType = "default" | "warn" | "error" | "success"