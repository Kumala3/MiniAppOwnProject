import Switch from "../Switch/Switch.tsx"
import "./ToggleOption.scss"

type ToggleOptionProps = {
    text: string
    isChecked: boolean
    setIsChecked: (isChecked: boolean) => void
}

function ToggleOption({text, isChecked, setIsChecked}: Readonly<ToggleOptionProps>) {
    return (
        <div className="toggle-option">
            <div className="toggle-option__text">
                {text}
            </div>
            <Switch
                is_Checked={isChecked}
                setIsChecked={setIsChecked}
            />
        </div>

    )
}

export default ToggleOption
