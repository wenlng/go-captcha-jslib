/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

export interface SlideConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

export const defaultConfig = ():SlideConfig => ({
  width: 300,
  height: 220,
  thumbWidth: 150,
  thumbHeight: 40,
  verticalPadding: 16,
  horizontalPadding: 12,
  showTheme: true,
  title: "请拖动滑块完成拼图",
  iconSize: 22,
  scope: true,
})


export interface SlideData {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

export const defaultSlideData = (): SlideData => ({
  thumbX: 0,
  thumbY: 0,
  thumbWidth: 0,
  thumbHeight: 0,
  image: '',
  thumb: ''
})

export interface SlidePoint {
  x: number,
  y: number,
}

export interface SlideEvent {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: SlidePoint, reset:() => void) => void;
}