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
    scope?: boolean;
}
export declare const defaultConfig: () => RotateConfig;
export interface RotateData {
    angle: number;
    image: string;
    thumb: string;
}
export declare const defaultRotateData: () => RotateData;
export interface RotateEvent {
    rotate?: (angle: number) => void;
    refresh?: () => void;
    close?: () => void;
    confirm?: (angle: number, reset: () => void) => void;
}
