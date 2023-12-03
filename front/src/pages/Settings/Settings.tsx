import "./Settings.scss"
import SettingSection from "../../components/SettingsCards/SettingSection.tsx"
import {ROUTES} from "../../constants/routes.ts"
import {modelProps} from "../../App.tsx"
import {Language} from "../../constants/languages.ts"

export type SettingsProps = {
    userModel: modelProps,
    userLanguage: Language,
    userAutoTranscription: boolean,
    userAutoSpeech: boolean,
    userSingleMessage: boolean,
    userWindowLimit: number,
}

function Settings({userModel, userLanguage, userAutoTranscription, userAutoSpeech, userSingleMessage, userWindowLimit}: SettingsProps)
{
    const modelSettingsData = [
        {
            title: "language model",
            icon: "./src/assets/icons/language-model.png",
            value: userModel.verbose_name,
            to: ROUTES.LANGUAGE_MODEL,
            ready: true,
        },
        {
            title: "custom instructions",
            icon: "./src/assets/icons/custom-instructions.png",
            value: "",
            to: ROUTES.CUSTOM_INSTRUCTIONS,
            ready: false,
        },
        {
            title: "context window limit",
            icon: "./src/assets/icons/window-limit.png",
            value: userWindowLimit,
            to: ROUTES.CONTEXT_WINDOW_LIMIT,
            ready: false,
        }

    ]

    const AdditionalData = [
        {
            title: "automatic speech",
            icon: "./src/assets/icons/auto-speech.png",
            value: userAutoSpeech ? "On" : "Off",
            to: ROUTES.AUTOMATIC_SPEECH,
            ready: false,
        },
        {
            title: "auto transcription",
            icon: "./src/assets/icons/auto-transcription.png",
            value: userAutoTranscription ? "On" : "Off",
            to: ROUTES.AUTO_TRANSCRIPTION,
            ready: false,
        },
        {
            title: "single message",
            icon: "./src/assets/icons/single-message.png",
            value: userSingleMessage ? "On" : "Off",
            to: ROUTES.SINGLE_MESSAGE,
            ready: false,
        }
    ]

    const InterfaceData = [
        {
            title: "Language",
            icon: "./src/assets/icons/language-interface.png",
            value: userLanguage.name,
            to: ROUTES.LANGUAGE_INTERFACE,
            ready: true,
        }
    ]

    return (
        <div className="settings-menu">
            <SettingSection
                title={"language model"}
                data={modelSettingsData}
            />
            <SettingSection
                title={"additional"}
                data={AdditionalData}/>
            <SettingSection
                title={"Interface"}
                data={InterfaceData}/>
        </div>
    )
}

export default Settings