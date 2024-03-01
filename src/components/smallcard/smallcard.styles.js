import styled from 'styled-components';

const StyledSmallCard = styled.div`
	width: 255px;
	height: 125px;
	background-color: #262b42;
	display: grid;
	grid-template-columns: 1fr 0.5fr;
	border-radius: 5px;
	align-items: center;
	justify-content: space-between;

	padding-top: 26px;
	img {
		margin: auto;
		background-color: inherit;
	}
	@media only screen and (max-width: 425px) {
		margin: 0 auto;
	}
`;
const StyledText = styled.p`
	background-color: #262b42;
	color: #8b98c6;
	padding-left: 24px;
	font-size: 14px;
	margin: 0;
`;
const StyledH1 = styled.h1`
	background-color: #262b42;
	color: white;
	margin-left: 24px;
	font-size: 32px;
`;
const Styledcontainer = styled.div`
	background-color: #262b42;
	display: flex;
	justify-content: center;
	width: fit-content;
	gap: 5px;
	margin: 0 auto;
	img {
		background-color: inherit;
	}
`;
const StyledSpan = styled.span`
	background-color: #262b42;
	color: green;
	color: ${({ $color }) => $color};
	font-size: 12px;
`;
export { StyledSmallCard, StyledText, StyledH1, Styledcontainer, StyledSpan };
