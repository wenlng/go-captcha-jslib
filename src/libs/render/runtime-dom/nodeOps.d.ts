export declare const nodeOps: {
    insert: (el: any, parent: any, anchor: any) => any;
    remove(el: any): void;
    createElement: (type: any) => any;
    createElementNS: (type: any, tag: any) => HTMLElement;
    createText: (text: any) => Text;
    setText: (node: any, text: any) => any;
    setElementText: (el: any, text: any) => any;
    parentNode: (node: any) => any;
    nextSibling: (node: any) => any;
};
