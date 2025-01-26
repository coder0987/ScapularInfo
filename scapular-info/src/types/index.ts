export interface ScapularType {
    imgURL: string;
    route: string;
    label: string;
    element: any;
    alias: undefined | string;
    subroutes: undefined | {
        route: string;
        label: string;
        element: () => JSX.Element;
    }[];
};