import "./SectionTitle.scss"
import classNames from "classnames"

type SectionTitleProps = {
    title: string,
    type?: "primary" | "secondary",
    fontWeight?: "regular" | "semibold" | "bold",
}

function SectionTitle({title, type = "primary", fontWeight = "bold"}: SectionTitleProps) {
    return (
        <h2
            className={classNames("section-title",
                {"uppercase letter-spacing": type === "primary"},
                {"capitalize": type === "secondary"},
                {"font-weight-regular": fontWeight === "regular"},
                {"font-weight-semibold": fontWeight === "semibold"},
                {"font-weight-bold": fontWeight === "bold"}
            )}>
            {title}
        </h2>
    )
}

export default SectionTitle