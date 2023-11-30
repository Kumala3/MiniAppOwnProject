import "./CustomInstructions.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
// import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import Description from "../../components/Description/Description.tsx"
// import SaveSettingsButton from "../../components/Buttons/SaveButton.tsx"
// import Description from "../../components/Description/Description.tsx"

function CustomInstructions() {
    return (
        <div className={"custom-instructions"}>
            <Description text={""}>
                <p className={"text-hint"}>What Would You Like ChatGPT To Know About You To Provide Better Responses?</p>
            </Description>
            <BackNavigationButton/>
        </div>
    )
}

export default CustomInstructions