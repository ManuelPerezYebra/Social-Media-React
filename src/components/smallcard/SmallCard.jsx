import { StyledH1, StyledSmallCard, StyledText, Styledcontainer, StyledSpan} from "./smallcard.styles"

const SmallCard =({img, views, type, change,color,arrow})=>{
    return <StyledSmallCard>
        <StyledText>{type}</StyledText>
        <img src={img} alt="" />
        <StyledH1>{views}</StyledH1>
        <Styledcontainer>
        <img src={arrow} alt="" /> <StyledSpan $color={color}>{change}</StyledSpan>
        </Styledcontainer>
        
    </StyledSmallCard>
}

export default SmallCard