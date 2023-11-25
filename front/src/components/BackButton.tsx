import {BackButton} from "@vkruglikov/react-telegram-web-app"
import {useNavigate} from "react-router-dom"


function BackNavigationButton() {
    const navigate = useNavigate()

    return (
        <div>
            <BackButton
                onClick={
                    () => navigate(-1)
                }/>
        </div>
    )
}

export default BackNavigationButton