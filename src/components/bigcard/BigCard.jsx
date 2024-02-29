import { StyledBigCard, StyledImgContainer,StyledSpan,StyledH1, StyledText, StyledImgContainerBottom } from "./bigcard.styles"

const BigCard =({img, followers, type, followerschange, bordercolor,arrow, up})=>{
    return <StyledBigCard $bordercolor={bordercolor}>
        <StyledImgContainer> 
            <img src={img} alt="" /><StyledSpan $color='#8B98C6'>@manuelperezyebra</StyledSpan>
            </StyledImgContainer>
                <StyledH1>{followers}</StyledH1>
                <StyledText>{type}</StyledText>
                <StyledImgContainerBottom> 
            <img src={arrow} alt="" /><StyledSpan  $color={up}>{followerschange}</StyledSpan>
            </StyledImgContainerBottom>
            
       
     </StyledBigCard>
}

export default BigCard