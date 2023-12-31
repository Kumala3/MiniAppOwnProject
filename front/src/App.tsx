import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import Settings from "./pages/Settings/Settings.tsx"
import {ROUTES} from "./constants/routes.ts"
import LanguageModel from "./pages/LanguageModel/LanguageModel.tsx"
import LanguageInterface from "./pages/LanguageInterface/LanguageInterface.tsx"
import AutoTranscription from "./pages/AutoTranscription/AutoTranscription.tsx"
import AutoSpeech from "./pages/AutoSpeech/AutoSpeech.tsx"
import SingleMessage from "./pages/SingleMessage/SingleMessage.tsx"
import CustomInstructions from "./pages/CustomInstructions/CustomInstructions.tsx"
import WindowLimit from "./pages/WindowLimit/WindowLimit.tsx"
import {useState} from "react"
import {LANGUAGES} from "./constants/languages.ts"

export type modelProps = {
    model_id: number,
    model_name: string,
    verbose_name: string,
}

function App() {
    const models: modelProps[] = [
        {
            model_id: 1,
            model_name: "GPT-3",
            verbose_name: "GPT-3",
        },
        {
            model_id: 2,
            model_name: "GPT-3.5",
            verbose_name: "GPT-3.5",
        },
        {
            model_id: 3,
            model_name: "GPT-4",
            verbose_name: "GPT-4",
        },
    ]

    const [userModel, setUserModel] = useState(models[0])
    const [userLanguage, setUserLanguage] = useState(LANGUAGES[0])
    const [userAutoTranscription, setUserAutoTranscription] = useState(false)
    const [userAutoSpeech, setUserAutoSpeech] = useState(false)
    const [userSingleMessage, setUserSingleMessage] = useState(false)
    const [userProfile, setUserProfile] = useState("")
    const [responseProfile, setResponseProfile] = useState("")
    const [userWindowLimit, setUserWindowLimit] = useState(1000)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path=""
                        element={
                            <Settings
                                userModel={userModel}
                                userLanguage={userLanguage}
                                userAutoTranscription={userAutoTranscription}
                                userAutoSpeech={userAutoSpeech}
                                userSingleMessage={userSingleMessage}
                                userWindowLimit={userWindowLimit}
                            />}
                    />
                    <Route
                        path={ROUTES.LANGUAGE_MODEL}
                        element={
                            <LanguageModel
                                models={models}
                                userModel={userModel}
                                setUserModel={setUserModel}
                            />}
                    />
                    <Route
                        path={ROUTES.LANGUAGE_INTERFACE}
                        element={
                            <LanguageInterface
                                userLanguage={userLanguage}
                                setUserLanguage={setUserLanguage}
                            />}
                    />
                    <Route
                        path={ROUTES.AUTO_TRANSCRIPTION}
                        element={
                            <AutoTranscription
                                userAutoTranscription={userAutoTranscription}
                                setUserAutoTranscription={setUserAutoTranscription}
                            />
                        }
                    />
                    <Route
                        path={ROUTES.AUTOMATIC_SPEECH}
                        element={
                            <AutoSpeech
                                userAutoSpeech={userAutoSpeech}
                                setUserAutoSpeech={setUserAutoSpeech}
                            />
                        }
                    />
                    <Route
                        path={ROUTES.SINGLE_MESSAGE}
                        element={
                            <SingleMessage
                                userSingleMessage={userSingleMessage}
                                setUserSingleMessage={setUserSingleMessage}
                            />
                        }
                    />
                    <Route
                        path={ROUTES.CUSTOM_INSTRUCTIONS}
                        element={
                            <CustomInstructions
                                userProfile={userProfile}
                                responseProfile={responseProfile}
                                setUserProfile={setUserProfile}
                                setResponseProfile={setResponseProfile}
                            />
                        }
                    />
                    <Route
                        path={ROUTES.CONTEXT_WINDOW_LIMIT}
                        element={
                            <WindowLimit
                                userWindowLimit={userWindowLimit}
                                setUserWindowLimit={setUserWindowLimit}
                                userModelID={userModel.model_id}
                            />
                        }
                    />
                    <Route
                        path="*"
                        element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
