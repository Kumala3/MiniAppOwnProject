import {Link} from "react-router-dom"
import ArrowIcon from "../Icons/Icons.tsx"
import classNames from "classnames"
import "./SettingCard.scss"

export type SettingCardProps = {
    title: string,
    value?: string | number,
    icon: string,
    to: string,
    ready: boolean
}

function SettingCard({title, value, icon, to, ready = false}: Readonly<SettingCardProps>) {
    return (
        <Link to={to}>
            <div className={classNames("card", {"card--disabled": !ready})}>
                <div className="card__left">
                    <div className="card__icon">
                        <img
                            src={icon}
                            className="card__icon"
                            alt={`${title} icon`}
                        />
                    </div>
                    <div className="card__title">
                        {title}
                    </div>
                </div>

                <div className="card__right">
                    {value && <div className="card__value"> {value} </div>}
                    <ArrowIcon/>
                </div>

            </div>
        </Link>
    )
}

export default SettingCard