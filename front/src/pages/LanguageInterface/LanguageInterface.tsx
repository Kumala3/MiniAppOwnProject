import "./LanguageInterface.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import {languageProps} from "../../App.tsx"
import {useState} from "react"
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import SelectionOption from "../../components/SelectionOption/SelectionOption.tsx"
import SaveSettingsButton from "../../components/Buttons/SaveButton.tsx"

type LanguageInterfaceProps = {
    userLanguage: languageProps,
    languages: languageProps[],
    setUserLanguage: (language: languageProps) => void,
}

function LanguageInterface({userLanguage, languages, setUserLanguage}: LanguageInterfaceProps)
{
    const [selectedLanguage, setSelectedLanguage] = useState<languageProps>(languages[0])

    const handleClick = (language: languageProps) => {
        setSelectedLanguage(language)
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
                                onClick={() => {handleClick(language)}}
                                subtitle_text={language.subtitle_language}
                            />
                        )
                    })
                }
            </div>
            <SaveSettingsButton<languageProps>
                setData={setUserLanguage}
                selectedData={selectedLanguage}
                userData={userLanguage}
                compare={(selected, user) => selected.language_id !== user.language_id}

            />
            <BackNavigationButton/>
        </div>
    )
}

export default LanguageInterface