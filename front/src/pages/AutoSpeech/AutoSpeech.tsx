import "./AutoSpeech.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import Description from "../../components/Description/Description.tsx"
import ToggleOption from "../../components/ToggleOption/ToggleOption.tsx"

type AutoSpeechProps = {
    userAutoSpeech: boolean,
    setUserAutoSpeech: (auto_speech: boolean) => void,
}

function AutoSpeech({userAutoSpeech, setUserAutoSpeech}: AutoSpeechProps) {
    return (
        <div className={""}>
            <SectionTitle title={"Automatic Speech"}/>
            <ToggleOption
                text={"Automatic Speech Recognition"}
                isChecked={userAutoSpeech}
                setIsChecked={setUserAutoSpeech}
            />
            <Description text={""}>
                <p className={"first-paragraph"}>
                    This feature is not working yet.
                </p>
                <p>
                    This feature will allow you to use the speech recognition to control the application.
                </p>
            </Description>
            <BackNavigationButton/>
        </div>
    )
}

export default AutoSpeech