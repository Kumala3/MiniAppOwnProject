import "./TextAreaCard.scss"
import SectionTitle from "../SectionTitle/SectionTitle.tsx"
import React from "react"

type TextAreaCardProps = {
    title: string;
    placeholder: string;
    value: string;
    maxLength?: number;
    spellCheck?: boolean;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextAreaCard({title, placeholder, value, maxLength, spellCheck, onChange}: TextAreaCardProps) {
    return (
        <div className={"text-area-card"}>
            <SectionTitle
                title={title}
                type={"secondary"}
            />

            <textarea
                className={"text-area-card__input"}
                placeholder={placeholder}
                value={value}
                maxLength={maxLength}
                spellCheck={spellCheck}
                onChange={onChange}
            />
        </div>
    )
}

export default TextAreaCard
