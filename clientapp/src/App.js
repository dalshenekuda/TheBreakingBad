import React from "react"
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CharacterPage from "./pages/CharacterPage";
import EpisodePage from "./pages/EpisodePage";
import Header from "./components/Header";

function App() {
    return (
        <div className="items-center flex flex-col">
            <Header/>

            <BrowserRouter>

                <main>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/episodes/:id" component={EpisodePage}/>
                    <Route exact path="/characters/:name" component={CharacterPage}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
