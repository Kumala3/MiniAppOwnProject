import { useNavigate } from "react-router-dom"
import { MainButton } from "@vkruglikov/react-telegram-web-app"
import {modelProps} from "../../App.tsx"

type SaveSettingsButtonProps = {
    setUserModel: (model: modelProps) => void,
    selectedModel: modelProps,
    userModel: modelProps,
}

function SaveSettingsButton({setUserModel, selectedModel, userModel}: SaveSettingsButtonProps) {
    const navigate = useNavigate()

    const handleSave = () => {
        setUserModel(selectedModel)
        navigate(-1)
    }

    return (
        <div>
            {
                selectedModel.model_id !== userModel.model_id &&
                <MainButton
                    text="Save"
                    onClick={handleSave}
                />
            }
        </div>
    )
}

export default SaveSettingsButton