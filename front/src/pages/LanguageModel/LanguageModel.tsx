import "./LanguageModel.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import SelectionOption from "../../components/SelectionOption/SelectionOption.tsx"
import {modelProps} from "../../App.tsx"
import {useState} from "react"
import SaveSettingsButton from "../../components/Buttons/SaveButton.tsx"
import Description from "../../components/Description/Description.tsx"

type LanguageModelProps = {
    userModel: modelProps,
    models: modelProps[],
    setUserModel: (model: modelProps) => void,
}

function LanguageModel({userModel, models, setUserModel}: LanguageModelProps) {

    const [selectedModel, setSelectedModel] = useState<modelProps>(models[0])

    const handleClick = (model: modelProps) => {
        setSelectedModel(model)
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
                                onClick={() => {
                                    handleClick(model)
                                }}
                            />
                        )
                    })
                }
            </div>
            <Description text={"Choose a language model to use for your speech recognition.wawa"}>
                <ul>
                    <li><strong>GPT 3</strong> provides good results at a lower cost.</li>
                    <li><strong>GPT 4</strong> offers superior performance but at a higher price.</li>
                </ul>
            </Description>
            <SaveSettingsButton
                setUserModel={setUserModel}
                selectedModel={selectedModel}
                userModel={userModel}
            />
            <BackNavigationButton/>
        </div>
    )
}

export default LanguageModel