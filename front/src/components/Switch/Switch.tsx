import "./Switch.scss"
import classNames from "classnames"
import {useState} from "react"

type SwitchProps = {
    is_Checked: boolean,
    setIsChecked: (is_checked: boolean) => void,
}

function Switch({is_Checked, setIsChecked}: SwitchProps) {
    const [checked, setChecked] = useState(is_Checked)

    const toggleSwitch = () => {
        setChecked(!checked)
        setIsChecked(!checked)
    }

    return (
        <>
            <span
                className={classNames("switch", {"switch__checked": is_Checked})}
                onClick={toggleSwitch}>
            </span>
        </>
    )
}

export default Switch