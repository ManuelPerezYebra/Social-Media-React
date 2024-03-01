import styled from 'styled-components';

const StyledBigCardsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 1.25rem;

	@media only screen and (max-width: 425px) {
		grid-template-columns: 1fr;
	}
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export { StyledBigCardsContainer };
