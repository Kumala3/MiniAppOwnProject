import SettingCard, {SettingCardProps} from "./SettingCard.tsx"
import SectionTitle from "../../pages/Settings/SectionTitle.tsx"
// import React from "react"

type SettingSectionProps = {
    title: string;
    // children: React.ReactNode;
    data: SettingCardProps[];
}

function SettingSection({title, data}: SettingSectionProps) {
    return (
        <section className="section">
            <SectionTitle
                title={title}
                type={"primary"}/>
            <div className="section__cards">
                {
                    data.map((card: SettingCardProps) => (
                        <SettingCard
                            key={card.title}
                            title={card.title}
                            icon={card.icon}
                            value={card.value}
                            to={card.to}
                            ready={card.ready}/>
                    ))
                }

            </div>
        </section>
    )
}

export default SettingSection