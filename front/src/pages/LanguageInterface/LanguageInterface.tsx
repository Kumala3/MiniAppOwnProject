import "./LanguageInterface.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import {languageProps} from "../../App.tsx"
import {useState} from "react"
// import saveButton from "../../components/Buttons/SaveButton.tsx"

type LanguageInterfaceProps = {
    userLanguage: languageProps,
    models: languageProps[],
    setUserLanguage: (language: languageProps) => void,
}

function LanguageInterface({userLanguage, models, setUserLanguage}: LanguageInterfaceProps)
{
    const [selectedLanguage, setSelectedLanguage] = useState<languageProps>(models[0])

    const handleClick = (language: modelProps) => {
        setSelectedLanguage(model)
    }


    return (
        <div>
            niger
            <BackNavigationButton/>
        </div>
    )
}

export default LanguageInterface