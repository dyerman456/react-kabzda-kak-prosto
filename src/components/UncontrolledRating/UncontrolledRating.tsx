import React, {useState} from "react";

export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} callBack={() => setValue(1)}/>
            <Star selected={value > 1} callBack={() => setValue(2)}/>
            <Star selected={value > 2} callBack={() => setValue(3)}/>
            <Star selected={value > 3} callBack={() => setValue(4)}/>
            <Star selected={value > 4} callBack={() => setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.callBack}>{props.selected ? <b>star </b> : <>star </>}</span>
    )
}
