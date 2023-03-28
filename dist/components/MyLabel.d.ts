/// <reference types="react" />
import "./MyLabel.css";
export interface MyLabelProps {
    /**
     * La propiedad Label define el contenido
     */
    label: string;
    /**
     * La propiedad Size define el tamaño
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * La propiedad AllCaps define si el texto es todo mayúsculas cuando esta en true
     */
    allCaps: boolean;
    /**
     * La propiedad color define el color del texto
     */
    color: "primary" | "secondary" | "tertiary";
    /**
     * La propiedad customColor define el color del texto
     */
    customColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, customColor, }: MyLabelProps) => JSX.Element;
