import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/Onoff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);

    return (
        <div className="App">
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<PageTitle title="This is App component"/>*/}
            {/*<PageTitle title="My friends"/>*/}
            {/*Article 1*/}
            {/*<Accordion titleValue="Menu" collapsed={true}/>*/}
            {/*<Accordion titleValue="Users" collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
