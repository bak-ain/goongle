import { GungItems } from "../img/img";
import './GungItem.css';

const GungItem = ({ currentGung }) => {
    const gungImageMap = {
        gyeongbokgung: GungItems.gungItem1,
        changdeokgung: GungItems.gungItem3,
        changgyeonggung: GungItems.gungItem4,
        deoksugung: GungItems.gungItem5,
        gyeonghuigung: GungItems.gungItem2,
    };
    const currentImg = gungImageMap[currentGung] || GungItems.gungItem1;
    return (
        <div className={`GungItem ${currentGung}`} >
            <img src={currentImg} alt={currentImg} />
        </div>
    )
}

export default GungItem;