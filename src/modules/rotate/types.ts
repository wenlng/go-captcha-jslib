/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

export interface RotateConfig {
  width?: number;
  height?: number;
  size?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

export const defaultConfig = ():RotateConfig => ({
  width: 300,
  height: 220,
  size: 220,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true,
  title: "请拖动滑块完成拼图",
  iconSize: 22,
  scope: true,
})


export interface RotateData {
  angle: number;
  image: string;
  thumb: string;
  thumbSize: number;
}

export const defaultRotateData = ():RotateData => ({
  angle: 0,
  image: '',
  thumb: '',
  thumbSize: 0,
})

export interface RotateEvent {
  rotate?: (angle: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (angle: number, reset:() => void) => void;
}