import "./Settings.scss"
import SettingSection from "../../components/SettingsCards/SettingSection.tsx"
import {ROUTES} from "../../constants/routes.ts"
import {modelProps, languageProps} from "../../App.tsx"

export type SettingsProps = {
    userModel: modelProps,
    userLanguage: languageProps,
}

function Settings({userModel, userLanguage}: SettingsProps)
{
    console.log(userModel)
    console.log(userLanguage)
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
            value: "",
            to: ROUTES.CONTEXT_WINDOW_LIMIT,
            ready: false,
        }

    ]

    const AdditionalData = [
        {
            title: "automatic speech",
            icon: "./src/assets/icons/auto-speech.png",
            value: "Off",
            to: ROUTES.AUTOMATIC_SPEECH,
            ready: false,
        },
        {
            title: "auto transcription",
            icon: "./src/assets/icons/auto-transcription.png",
            value: "Off",
            to: ROUTES.AUTO_TRANSCRIPTION,
            ready: false,
        },
        {
            title: "single message",
            icon: "./src/assets/icons/single-message.png",
            value: "Off",
            to: ROUTES.SINGLE_MESSAGE,
            ready: false,
        }
    ]

    const InterfaceData = [
        {
            title: "Language",
            icon: "./src/assets/icons/language-interface.png",
            value: userLanguage.language_name,
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