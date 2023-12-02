import "./WindowLimit.scss"
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import Description from "../../components/Description/Description.tsx"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import Slider from "../../components/Slider/Slider.tsx"

import {useState} from "react"
import {MainButton} from "@vkruglikov/react-telegram-web-app"
import {useNavigate} from "react-router-dom"


type WindowLimitProps = {
    userWindowLimit: number,
    setUserWindowLimit: (limit: number) => void,
    userModelID: number,
}

const getMaxLimit = (modelId: number) => {
    switch (modelId) {
    case 1:
        return 8000
    case 2:
        return 16000
    case 3:
        return 32000
    default:
        return 8000
    }
}

function WindowLimit({userWindowLimit, setUserWindowLimit, userModelID}: WindowLimitProps) {

    const [currentWindowLimit, setCurrentWindowLimit] = useState<number>(userWindowLimit)
    const navigate = useNavigate()

    const handleSave = () => {
        setUserWindowLimit(currentWindowLimit)
        navigate(-1)
    }

    const minLimit = 1000
    const maxLimit = getMaxLimit(userModelID)

    return (
        <div className={"context-window-limit"}>
            <SectionTitle
                title={"Context Window Limit"}
            />
            <Slider
                min={minLimit}
                max={maxLimit}
                textUnit={"Tokens"}
                step={1000}
                currentValue={currentWindowLimit}
                setCurrentValue={setCurrentWindowLimit}
            />
            <Description
                text={""}
                fontWeight={"regular"}
                color={"hint"}
            >
                <p>
                    The context window limit is the maximum number of tokens (~characters) that ChatGPT will use to generate responses.
                </p>
                <br/>
                <p className={"description-text"}>
                    A higher context window limit will allow ChatGPT to generate more
                    accurate responses, but will also increase the cost of each message.
                </p>
            </Description>
            { currentWindowLimit !== userWindowLimit &&
                <MainButton
                    text={"Save"}
                    onClick={handleSave}
                />
            }
            <BackNavigationButton/>
        </div>
    )
}

export default WindowLimit