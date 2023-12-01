import "./CustomInstructions.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import Description from "../../components/Description/Description.tsx"
// import SaveSettingsButton from "../../components/Buttons/SaveButton.tsx"
import TextAreaCard from "../../components/TextAreaCard/TextAreaCard.tsx"

import {useState} from "react"
import {useNavigate} from "react-router-dom"

interface CustomInstructionsProps {
    userProfile: string,
    responseProfile: string,
    setUserProfile: (user_profile: string) => void,
    setResponseProfile: (response_profile: string) => void,
}

const CustomInstructions =
    ({userProfile, setUserProfile, responseProfile, setResponseProfile}: CustomInstructionsProps) => {
        const [currentUserProfileInstruction, setCurrentUserProfileInstruction] = useState<string>(userProfile)
        const [currentResponseProfileInstruction, setCurrentResponseProfileInstruction] = useState<string>(responseProfile)
        const navigate = useNavigate()

        const handleSave = () => {
            setUserProfile(currentUserProfileInstruction)
            setResponseProfile(currentResponseProfileInstruction)
            navigate(-1)
        }

        const buildPlaceholder = (instructions: string[]) => "- " + instructions.join("\n- ")


        const userProfileInstructions = [
            "Where are you from?",
            "What do you do for work?",
            "What are your hobbies and interests?",
            "What are you passionate about?",
            "What are your goals in life?",
        ]
        const responseStyleInstructions = [
            "How formal or casual should ChatGPT be?",
            "How long or short should ChatGPT's responses be?",
            "How do you want to be addressed?",
            "Should ChatGPT use emojis?",
            "Should ChatGPT have opinions on topic or be neutral?",
        ]

        return (
            <div className={"custom-instructions"}>
                <TextAreaCard
                    title={"What Would You Like ChatGPT To Know About You To Provide Better Responses?"}
                    placeholder={buildPlaceholder(userProfileInstructions)}
                    value={currentUserProfileInstruction}
                    onChange={
                        (e) => {
                            setCurrentUserProfileInstruction(e.target.value)
                        }
                    }
                />

                <TextAreaCard
                    title={"How Would You Like ChatGPT To Respond To You?"}
                    placeholder={buildPlaceholder(responseStyleInstructions)}
                    value={currentResponseProfileInstruction}
                    onChange={
                        (e) => {
                            setCurrentResponseProfileInstruction(e.target.value)
                        }
                    }
                />

                <Description text={""}>
                    <p className={"text-hint"}></p>
                </Description>

                <BackNavigationButton/>
            </div>
        )
    }


export default CustomInstructions