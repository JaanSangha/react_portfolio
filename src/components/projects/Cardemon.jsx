import React from "react";
import Footer from "../common/Footer";
import SmallHeader from "../common/SmallHeader";
import CustomCursor from '../common/CustomCursor';

function Cardemon() {

return (
    <div>
    <SmallHeader name="Cardemon" />
        <div className="container text-center">
            <div className="col-lg-10 mx-auto">
                <h1>Cardemon</h1>
                <iframe className="basicpadding" title="Cardemon Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/QwF3tM-Efs4?si=q4pkhR6e4FVadh0f">
				</iframe>
            </div>
        </div>

        <div className="container text-left">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h3>Introduction</h3>
                    <p className="lead mb-5">I am currently working on creating a turn based monster catching game that also includes classic RPG combat styles as well as farming and crafting. This game is being created using Unity 3D and C#.</p>
                    <h3>Monster Battles</h3>
                    <p className="lead mb-5">The monster battles are a turned based system with all the popular and crucial elements. Things like type effectiveness, status conditions, critical hits, and move priority are all implemented.Each move has been made with object oriented programming and can be assigned properties like power, type, VFX, and more.</p>
                    <h3>Scene Building</h3>
                    <p className="lead mb-5">The game uses additive scene loading so it can be explored without any pauses or interuptions. Only the scenes that are directly next to the player will be loaded and any scenes that are far away will be unloaded when the player is not close to them. Using this method created a really cool open-world game that I have been customizing to be visually appealing.</p>
                    <h3>Quest System</h3>
                    <p className="lead mb-5">There is a quest system implemented as well, allowing the player to be rewarded for completing specific tasks. This is also done with object oriented programming which makes it very simple to customize the rewards and requirements for the quests.</p>
                    <h3>Cool Mounts</h3>
                    <p className="lead mb-5">A really cool feature I implemented is the ability to ride on your monsters. The player will be able to ride on their back and fly or walk through the map at a faster speed then on foot. The mounts also have reasonable limitations so the player can't use them indoors or in inappropriate places.</p>
                    <h3>Card Collection</h3>
                    <p className="lead mb-5">The player will be able to keep track of which monsters they have collected using their Cardex. The monsters will be displayed as cards that show the players information on monsters they have caught and shows which ones they need to find still. The art is placeholder and will be updated with a cool new design in the near future.</p>
                    <h3>Weather and Calendar System</h3>
                    <p className="lead mb-5">The game has a functional day/night cycle with weather effects that change according to the season. When changing the game from morning to night or vice versa the sky will be changed appropriately and the scene gradually becomes more light/dark.</p>
                    <h3>Saving and Loading</h3>
                    <p className="lead mb-5">I implemented a saving and loaded system as well so the player can progress through the game while keeping all their items, monsters, achievements. This is done by adding a savable component to all the scripts I want to keep track of and then storing the values when the game is saved and restoring them when loaded.</p>
                    <h3>Dungeons</h3>
                    <p className="lead mb-5">There are dungeons that the player can discover and clear to get enticing rewards. Within the dungeons there are enemies and different routes to go so you will have to navigate to the main boss room to get the reward. I am planning to add a big diversity of puzzles to the dungeons the player will have to solve with brains and skills in order to progress through them.</p>
                    <h3>Melee Combat</h3>
                    <p className="lead mb-5">The combat system is still under development but here is an example of an enemy encounter. The AI will notice the player when in eyesight and try to attack them. They will go for an attack and then back up and strafe to either side before going in for another one. The player can also block the attack which stuns the enemy for a moment to give a chance for extra attacks.</p>
                    
                </div>
            </div>
        </div>

        <Footer />
        <CustomCursor />
    </div>
    );

}


export default Cardemon;