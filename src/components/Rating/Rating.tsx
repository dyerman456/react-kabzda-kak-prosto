import React from "react";

export function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

const Star = () => {
    return (
        <div>star</div>
    )
}