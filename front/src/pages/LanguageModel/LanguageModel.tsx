import "./LanguageModel.scss"
import BackNavigationButton from "../../components/BackButton.tsx"
import SectionTitle from "../Settings/SectionTitle.tsx"
import SelectionOption from "../../components/SelectionOption/SelectionOption.tsx"
import {modelProps} from "../../App.tsx"
import {useState} from "react"
import {MainButton} from "@vkruglikov/react-telegram-web-app"

type LanguageModelProps = {
    userModel: modelProps,
    models: modelProps[],
    setUserModel: () => void,
}

function LanguageModel({userModel, models, setUserModel}: LanguageModelProps) {

    const [selectedModel, setSelectedModel] = useState<modelProps>(models[0])

    const handleClick = (model: modelProps) => {
        setSelectedModel(model)
        // setUserModel(model)
    }

    const handleSave = () => {
        setUserModel(selectedModel)
    }

    return (
        <div className={"language-model"}>
            <SectionTitle title={"Language Models"}/>
            <div className={"language-model__selector"}>
                {
                    models.map((model) => {
                        return (
                            <SelectionOption
                                key={model.model_id}
                                text={model.model_name}
                                is_selected={model.model_id === selectedModel.model_id}
                                onClick={() => {handleClick(model)}}
                            />
                        )
                    })
                }
            </div>
            <div className={"language-model__description"}>
                description
            </div>
            <MainButton
                text={"Save"}
                onClick={handleSave}

            />
            <BackNavigationButton/>
        </div>
    )
}

export default LanguageModel