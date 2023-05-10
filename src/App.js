import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import bag_one from './assets/bag_1.png';
import bag_two from './assets/bag_2.png';
import bag_three from './assets/bag_3.png';
import bag_four from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png'
import Tile from "./Tile";

// import {unstable_renderSubtreeIntoContainer} from "react-dom";

function App() {
    return (
        <>
            <nav>
                <Button
                    nameButton="to the collection"
                    isDisabled={false}
                />
                <Button
                    nameButton="shop all bags"
                    isDisabled={false}
                />
                <Button
                    nameButton="pre-orders TEST"
                    isDisabled={true}
                />
            </nav>
            <header>
                <h1>Handbags & Purses</h1>
            </header>
            <main>
                <Product
                    redLabel="Best seller"
                    locationImage={bag_one}
                    description="The handy bag"
                    price="€400"
                /><Product
                redLabel="Best seller"
                locationImage={bag_two}
                description="The stylish bag"
                price="250"
            /><Product
                redLabel="New collection"
                locationImage={bag_three}
                description="The simple bag"
                price="€300"
            /><Product
                redLabel="New collection"
                locationImage={bag_four}
                description="The trendy bag"
                price="€150"
            />
            </main>
            <footer>
                <Tile><h2>THE BRAND</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
                    voluptatum.</p></Tile>

                <Tile>
                    <img src={brand} alt=""/>
                </Tile>
                <Tile>
                    <img src={our_story} alt=""/>
                </Tile>
                <Tile>
                    <h2>OUR STORY</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                        ullam?</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



