import { ReactNode } from "react";

export interface ThemePropType{
    children:React.ReactElement;
    mode:any|undefined;
}

export interface RouterComponentPropsType{
isLoggedIn:boolean;
}

export interface LayoutPropsType{
    children:ReactNode
}

export interface FormInputProps {
    name:string;
    label:string;
    type:string;
    required:boolean;
    placeholder:string;
    register:any;
    sx:any
}