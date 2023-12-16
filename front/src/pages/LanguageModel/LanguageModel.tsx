import "./LanguageModel.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import { Model } from "../../types/models.ts"

import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {MainButton} from "@vkruglikov/react-telegram-web-app"

import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import SelectionOption from "../../components/SelectionOption/SelectionOption.tsx"
import Description from "../../components/Description/Description.tsx"

type LanguageModelProps = {
    userModel: Model,
    models: Model[],
    setUserModel: (model: Model) => void,
}

function LanguageModel({userModel, models, setUserModel}: Readonly<LanguageModelProps>) {

    const [selectedModel, setSelectedModel] = useState<Model>(userModel)
    const navigate = useNavigate()

    const handleClick = (model: Model) => {
        setSelectedModel(model)
    }

    const handleSave = () => {
        setUserModel(selectedModel)
        navigate(-1)
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
            <Description text={"Choose a language model to use for your speech recognition."}>
                <ul>
                    <li><strong>GPT 3</strong> provides good results at a lower cost.</li>
                    <li><strong>GPT 4</strong> offers superior performance but at a higher price.</li>
                </ul>
            </Description>
            {
                selectedModel.model_id !== userModel.model_id &&
                <MainButton
                    text={"Save"}
                    onClick={handleSave}
                />
            }
            <BackNavigationButton/>
        </div>
    )
}

export default LanguageModel