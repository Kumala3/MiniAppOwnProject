import { useNavigate } from "react-router-dom"
import { MainButton } from "@vkruglikov/react-telegram-web-app"
// import {modelProps} from "../../App.tsx"

type SaveSettingsButtonProps<T> = {
    setData: (data: T) => void,
    selectedData: T,
    userData: T,
    compare: (selectedData: T, userData: T) => boolean,

}

function SaveSettingsButton<T>({ setData, selectedData, userData, compare }: SaveSettingsButtonProps<T>) {
    const navigate = useNavigate()

    const handleSave = () => {
        setData(selectedData)
        navigate(-1)
    }

    return (
        <div>
            {
                compare(selectedData, userData) &&
                <MainButton
                    text="Save"
                    onClick={handleSave}
                />
            }
        </div>
    )
}

export default SaveSettingsButton