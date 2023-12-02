import "./Description.scss"
import React from "react"
import classNames from "classnames"

type DescriptionProps = {
    text: string,
    children: React.ReactNode,
    fontWeight?: "regular" | "semibold" | "bold",
    color?: "hint" | "accent" | "link" | "text",

}

function Description({text, children, fontWeight, color}: DescriptionProps) {
    return (
        <div
            className={classNames("description",
                {"font-weight-regular": fontWeight === "regular"},
                {"font-weight-semibold": fontWeight === "semibold"},
                {"font-weight-bold": fontWeight === "bold"},
                {"tg-theme-text": color === "text"},
                {"tg-theme-hint": color === "hint"},
                {"tg-theme-link": color === "link"},
                {"tg-theme-accent": color === "accent"},
            )}
        >
            {text}
            {children}
        </div>
    )
}

export default Description