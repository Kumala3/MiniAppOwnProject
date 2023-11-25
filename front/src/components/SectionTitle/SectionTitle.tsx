import "./SectionTitle.scss"
import classNames from "classnames"

type SectionTitleProps = {
    title: string,
    type?: "primary" | "secondary",
}

function SectionTitle({title, type="primary"}: SectionTitleProps) {
    return (
        <h2
            className={classNames("section-title", {"uppercase letter-spacing": type === "primary"},
                {"capitalize": type === "secondary"})}>
            {title}
        </h2>
    )
}

export default SectionTitle