import { GungItems } from "../img/img";
import './GungItem.css';

const GungItem = () => {
    return(
        <div className="GungItem">
             <img src={GungItems.gungItem1} alt={GungItems.gungItem1} />
        </div>
    )
}

export default GungItem;