import "./Slider.scss"
import React from "react"


type SliderProps = {
    min: number,
    max: number,
    textUnit: string,
    step: number,
    currentValue: number,
    setCurrentValue: (limit: number) => void,
}

function Slider({min, max, textUnit, step, currentValue, setCurrentValue}: SliderProps) {

    const handleSave = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(Number(event.target.value))
    }

    return (
        <div className={"slider"}>
            <div className={"slider__top"}>
                <div className={"slider__label"}>{min.toLocaleString()}</div>
                <div className={"slider__value"}>
                    {`${currentValue.toLocaleString()} ${textUnit}`}
                </div>
                <div className={"slider__label"}>{max.toLocaleString()}</div>
            </div>

            <input
                className={"slider__input"}
                type={"range"}
                min={min}
                max={max}
                value={currentValue}
                step={step}
                onChange={handleSave}
            />
        </div>
    )
}

export default Slider