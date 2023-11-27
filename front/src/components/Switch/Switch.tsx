import "./Switch.scss"
import classNames from "classnames"
import {useState} from "react"

type SwitchProps = {
    Is_Checked: boolean,
    setIsChecked: (is_checked: boolean) => void,
}

function Switch({Is_Checked, setIsChecked}: SwitchProps)
{
    const [checked, setChecked] = useState(Is_Checked)

    const toggleSwitch = () => {
        setChecked(!checked)
        setIsChecked(!checked)
    }

    return (
        <>
            <span
                className={classNames("switch", {"switch__checked": Is_Checked})}
                onClick={toggleSwitch}>
            </span>
        </>
    )
}

export default Switch