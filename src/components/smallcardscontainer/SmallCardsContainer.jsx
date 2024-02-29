import SmallCard from "../smallcard/SmallCard"
import { StyledH1 , StyledHeader} from "../header/header.styles"
import { StyledContainer } from "./smallcardscontainer.styles"
import { SMALL_CARD_DATA } from "../../constants/small-card-data copy"

const SmallCardsContainer =()=>{
    return <>
    <StyledHeader>
        <StyledH1>Overview-Today</StyledH1>
    </StyledHeader>
    <StyledContainer>
       
        {SMALL_CARD_DATA.map(card => (
				<SmallCard key={card.id} {...card} />
			))}
    </StyledContainer>
    </>
}

export default SmallCardsContainer