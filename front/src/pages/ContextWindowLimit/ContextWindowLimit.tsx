import "./ContextWindowLimit.scss"
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

function WindowLimit({userWindowLimit, setUserWindowLimit, userModelID}: WindowLimitProps) {

    const [currentWindowLimit, setCurrentWindowLimit] = useState<number>(userWindowLimit)
    const navigate = useNavigate()

    const handleSave = () => {
        setUserWindowLimit(currentWindowLimit)
        navigate(-1)
    }

    return (
        <div className={"context-window-limit"}>
            <SectionTitle
                title={"Context Window Limit"}
                fontWeight={"regular"}
            />
            <Slider
                min={1000}
                max={15000}
                textUnit={"Tokens"}
                step={1000}
                currentValue={currentWindowLimit}
                setCurrentValue={setCurrentWindowLimit}
            />
            <Description
                text={"The context window limit is the maximum number of tokens (~characters) that ChatGPT will use to generate responses."}>
                <p>
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