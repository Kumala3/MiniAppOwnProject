import "./SingleMessage.scss"
import BackNavigationButton from "../../components/Buttons/BackButton.tsx"
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx"
import Description from "../../components/Description/Description.tsx"
import ToggleOption from "../../components/ToggleOption/ToggleOption.tsx"

type SingleMessageProps = {
    userSingleMessage: boolean,
    setUserSingleMessage: (single_message: boolean) => void,
}

function SingleMessage({userSingleMessage, setUserSingleMessage}: SingleMessageProps) {
    return (
        <div className={"single-message"}>
            <SectionTitle title={"Single Message Mode"}/>
            <ToggleOption
                text={"Single Message"}
                isChecked={userSingleMessage}
                setIsChecked={setUserSingleMessage}
            />
            <Description text={""}>
                <p className={"single-message__description-text"}>
                    Single request mode is a way for the bot to answer only one message at a time, instead of having
                    long chats.
                </p>
                <ul className={"single-message__preferences-list"}>
                    <li>
                        <b>Pros:</b> Its faster and easier to use.
                    </li>
                    <li>
                        <b>Cons:</b> Its less human-like and less fun.
                    </li>
                </ul>
            </Description>
            <BackNavigationButton/>
        </div>
    )
}

export default SingleMessage