import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;

	@media (min-width: 768px) {
		max-width: 750px;
	}
	@media (min-width: 992px) {
		max-width: 970px;
	}
	@media (min-width: 1200px) {
		max-width: 1170px;
	}
	.menuIcons {
		.reusecore__button {
			.btn-icon {
				color: ${themeGet('colors.white')};
				font-size: 18px;
				width: auto;
				margin: 0;
				@media (max-width: 1100px) {
					color: ${themeGet('colors.primary')} !important;
				}
			}
		}
	}
	.hamburgMenu__bar {
		margin-left: 10px;
		span {
			background-color: ${themeGet('colors.white')};
			@media (max-width: 1100px) {
				background-color: ${themeGet('colors.primary')} !important;
			}
		}
	}
`;

export { Container };
