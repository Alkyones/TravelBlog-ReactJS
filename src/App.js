import React from "react";


import Head from './Head/Head';
import Card from './TripCard/Card';
import data from './Trips';

export default function App(){
    const trips = data.map((item) => { return(<Card
        {...item}
        />)})
    return(
        <>
        <Head />
        {trips}
        </>
    )
}