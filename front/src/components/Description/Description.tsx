import "./Description.scss"
import React from "react"

type DescriptionProps = {
    text: string,
    children: React.ReactNode,
}

function Description({text, children}: DescriptionProps) {
    return (
        <div className={"description"}>
            {text}
            {children}
        </div>
    )
}

export default Description