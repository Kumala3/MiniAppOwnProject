import "./LanguageInterface.scss"
import {languageProps} from "../../App.tsx"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"

import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {MainButton} from "@vkruglikov/react-telegram-web-app"

import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import SelectionOption from "../../components/SelectionOption/SelectionOption.tsx"
import Description from "../../components/Description/Description.tsx"


type LanguageInterfaceProps = {
    languages: languageProps[],
    userLanguage: languageProps,
    setUserLanguage: (language: languageProps) => void,
}

function LanguageInterface({userLanguage, languages, setUserLanguage}: LanguageInterfaceProps) {
    const [selectedLanguage, setSelectedLanguage] = useState<languageProps>(languages[0])
    const navigate = useNavigate()

    const handleClick = (language: languageProps) => {
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
                    languages.map((language) => {
                        return (
                            <SelectionOption
                                key={language.language_id}
                                text={language.language_name}
                                is_selected={language.language_id === selectedLanguage.language_id}
                                onClick={() => {
                                    handleClick(language)
                                }}
                                secondary_text={language.verbose_name}
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
                selectedLanguage.language_id !== userLanguage.language_id &&
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