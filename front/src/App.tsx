import "./App.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import Settings from "./pages/Settings/Settings.tsx"
import {ROUTES} from "./constants/routes.ts"
import LanguageModel from "./pages/LanguageModel/LanguageModel.tsx"
import LanguageInterface from "./pages/LanguageInterface/LanguageInterface.tsx"
import {useState} from "react"

export type modelProps = {
    model_id: number,
    model_name: string,
    verbose_name: string,
}

export type languageProps = {
    language_id: number,
    language_name: string,
    subtitle_language: string,
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

    const languages: languageProps[] = [
        {
            language_id: 1,
            language_name: "English",
            subtitle_language: "English",
        },
        {
            language_id: 2,
            language_name: "Russian",
            subtitle_language: "Русский",
        },
        {
            language_id: 3,
            language_name: "Ukrainian",
            subtitle_language: "Українська",
        },
    ]

    const [userModel, setUserModel] = useState(models[0])
    const [userLanguage, setUserLanguage] = useState(languages[0])

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path=""
                        element={
                            <Settings
                                userModel={userModel}

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
                                models={models}
                                userModel={userModel}
                                setUserModel={setUserModel}
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
