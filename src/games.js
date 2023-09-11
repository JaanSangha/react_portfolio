import Cardemon from "./components/img/CardemonThumbRounded.PNG";
import FFThumb from "./components/img/FFThumbNailRounded.PNG";
import RCThumb from "./components/img/RCThumbRounded.jpg";
import CGThumb from "./components/img/CarGamePic.PNG";
import RRThumb from "./components/img/RaceThumbnail.png";

const games = [
{
    id: 1,
    title: "Cardemon",
    thumbnail: Cardemon,
    link: "/projects-cardemon"
},
{
    id: 2,
    title: "Roly Controly",
    thumbnail: RCThumb,
    link: "/projects-rolycontroly"
},
{
    id: 3,
    title: "Flooded Fox",
    thumbnail: FFThumb,
    link: "/projects-floodedfox"
},
{
    id: 4,
    title: "Car Battle",
    thumbnail: CGThumb,
    link: "/projects-carbattle"
},
{
    id: 5,
    title: "Reckless Rubber",
    thumbnail: RRThumb,
    link: "/projects-recklessrubber"
}
]

export default games;