import "./AutoTranscription.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import Description from "../../components/Description/Description.tsx"
import ToggleOption from "../../components/ToggleOption/ToggleOption.tsx"

type AutoTranscriptionProps = {
    userAutoTranscription: boolean,
    setUserAutoTranscription: (auto_transcription: boolean) => void,
}

function AutoTranscription({userAutoTranscription, setUserAutoTranscription}: AutoTranscriptionProps) {
    return (
        <div className={"auto-transcription"}>
            <SectionTitle title={"Auto Transcription"}/>
            <ToggleOption
                text={"Automatic Transcription"}
                isChecked={userAutoTranscription}
                setIsChecked={setUserAutoTranscription}
            />
            <Description text={""}>
                <p className={"hint-text"}>Toggles audio transcription for voice messages and video notes, allowing
                    to communicate with the bot
                    using audio if desired.</p>
            </Description>
            <BackNavigationButton/>
        </div>

    )
}

export default AutoTranscription