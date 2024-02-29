
import BigCard from "../BigCard/BigCard";
import { BIG_CARD_DATA } from "../../constants/big-card-data";

import { StyledBigCardsContainer } from "./bigcardscontainer.atyles";
const BigCardsContainer =()=>{
    return <StyledBigCardsContainer >
            {BIG_CARD_DATA.map(card => (
				<BigCard key={card.id} {...card} />
			))}
            </StyledBigCardsContainer>
}

export default BigCardsContainer