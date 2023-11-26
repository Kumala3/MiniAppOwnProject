import "./Switch.scss"
import classNames from "classnames"
import {useState} from "react"

type SwitchProps = {
    Is_Checked: boolean,
    set_Is_Checked: (is_checked: boolean) => void,
}

function Switch({Is_Checked, set_Is_Checked}: SwitchProps)
{
    const [checked, setChecked] = useState(Is_Checked)

    const toggleSwitch = () => {
        setChecked(!checked)
        set_Is_Checked(!checked)
    }

    return (
        <>
            <span
                className={classNames("switch", {"switch--checked": Is_Checked})}
                onClick={toggleSwitch}>

            </span>
        </>
    )
}

export default Switch