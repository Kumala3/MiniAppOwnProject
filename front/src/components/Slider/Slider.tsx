import "./Slider.scss"


type SliderProps = {
    min: number,
    max: number,
    textUnit: string,
}

function Slider({min, max, textUnit}: SliderProps) {

    return (
        <div className={"slider"}>
            <div className={"slider__top"}>
                <div className={"slider__label"}>{min}</div>
                <div className={"slider__value"}>{textUnit}</div>
                <div className={"slider__label"}>{max}</div>
            </div>
        </div>
    )
}

export default Slider