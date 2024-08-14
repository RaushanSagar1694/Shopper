import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import NewCollections from "../NewCollections/NewCollections";
import NewsLetter from "../NewsLetter/NewsLetter";

export default function Shop (){
    return (
       <>
       <Hero />
       <Popular />
       <Offers />
       <NewCollections />
       <NewsLetter />
       </>
    );
}