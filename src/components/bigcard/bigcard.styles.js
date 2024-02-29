import styled from 'styled-components';

const StyledBigCard = styled.div`
	width: 15.9375rem;
	height: 13.5rem;
	background-color: #262b42;
	border-radius: 5px;
	box-shadow: 0px -5px ${({ $bordercolor }) => $bordercolor};
`;
const StyledImgContainer = styled.div`
	display: flex;
	gap: 10px;
	background-color: inherit;
	justify-content: center;
	padding-top: 2rem;
	border-radius: 0.625rem;
	img {
		background: inherit;
	}
`;
const StyledSpan = styled.div`
	background-color: inherit;
	color: ${({ $color }) => $color};
`;
const StyledH1 = styled.div`
	text-align: center;
	font-family: 'Inter', sans-serif;
	font-weight: bold;
	background-color: inherit;
	color: aliceblue;
	font-size: 3.5rem;
	margin-top: 1.75rem;
`;
const StyledText = styled.p`
	color: white;
	background-color: inherit;
	text-align: center;
	margin-top: 0px;
	font-weight: lighter;
	letter-spacing: 0.2rem;
	font-family: 'Inter', sans-serif;
	font-size: 0.75rem;
`;
const StyledImgContainerBottom = styled.div`
	display: flex;
	gap: 10px;
	background-color: inherit;
	justify-content: center;
	font-size: 0.9rem;
	border-radius: 0.625rem;
	align-items: center;
	padding: auto;
`;

export {
	StyledBigCard,
	StyledImgContainer,
	StyledSpan,
	StyledH1,
	StyledText,
	StyledImgContainerBottom
};
