import "./SelectionOption.scss"
import {modelProps} from "../../App.tsx"

type SelectionOptionProps = {
    text: string,
    is_selected: boolean,
    onClick: (model: modelProps) => void,
    subtitle_text?: string,
}

function SelectionOption({text, is_selected, onClick, subtitle_text}: SelectionOptionProps) {
    return (
        <div
            className={"selection-option"}
            onClick={onClick}>
            <div className={"selection-option__left"}>
                <div className={"selection-option__text"}>
                    {text}
                    <div className={"subtitle-text"}>{subtitle_text}</div>
                </div>
            </div>
            <div className={"selection-option__right"}>
                {
                    is_selected && <div className={"selection-option__tick"}/>
                }
            </div>
        </div>
    )
}

export default SelectionOption