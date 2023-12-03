import "./LanguageInterface.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import {Language, LANGUAGES} from "../../constants/languages.ts"

import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {MainButton} from "@vkruglikov/react-telegram-web-app"

import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import SelectionOption from "../../components/SelectionOption/SelectionOption.tsx"
import Description from "../../components/Description/Description.tsx"


type LanguageInterfaceProps = {
    userLanguage: Language,
    setUserLanguage: (language: Language) => void,
}

function LanguageInterface({userLanguage, setUserLanguage}: LanguageInterfaceProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(userLanguage)
    const navigate = useNavigate()

    const handleClick = (language: Language) => {
        setSelectedLanguage(language)
    }

    const handleSave = () => {
        setUserLanguage(selectedLanguage)
        navigate(-1)
    }

    return (
        <div className={"language-interface"}>
            <SectionTitle title={"Language"}/>
            <div className={"language-interface__selector"}>
                {
                    LANGUAGES.map((language) => {
                        return (
                            <SelectionOption
                                key={language.code}
                                text={language.name}
                                is_selected={language.code === selectedLanguage.code}
                                onClick={() => {
                                    handleClick(language)
                                }}
                                secondary_text={language.localName}
                            />
                        )
                    })
                }
            </div>
            <Description text={""}>
                <p className={"first-paragraph"}>This option does not control this interface yet</p>
                <p>Controls the language of the interface in the bot</p>
            </Description>
            {
                selectedLanguage.code !== userLanguage.code &&
                <MainButton
                    text={"Save"}
                    onClick={handleSave}
                />
            }
            <BackNavigationButton/>
        </div>
    )
}

export default LanguageInterface