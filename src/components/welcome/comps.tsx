import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
const ripple = keyframes`
		to {
			transform: scale(2.5);
			opacity: 0;
		}
`;
export const FormWraper = styled(motion.div)`
	position: relative;
	width: 50%;
	margin: 0.5rem auto;
	background: rgba(45, 34, 84, 0.5);
	padding-bottom: 1em;
	margin-bottom: 1em;
	transition: all 0.7s linear;
	box-shadow: 0 4px 20px 0px #2196f3;
	.google {
		/* align-self: center; */
		margin-left: 30%;
	}
	@media screen and (max-width: 600px) {
		width: 94%;
	}
`;
export const SelectType = styled.ul`
	display: flex;
	margin-bottom: 0.3rem;
	.active_link {
		border-bottom: 3px solid #ffa500;
	}
	li {
		width: 35%;
		padding: 5px;
		text-transform: uppercase;
		color: #fff;
		font-family: cursive;
		margin-left: 2rem;
		cursor: pointer;
		transition: all 0.5s linear;
		border-bottom: 3px solid transparent;
	}
`;
export const FormHeader = styled.p`
	text-align: center;
	overflow: hidden;
	padding: 0.8rem;
	font-weight: bold;
	background: rgba(33, 150, 243, 0.2);
	color: #fff;
	letter-spacing: 10px;
	position: relative;

	@media screen and (max-width: 600px) {
		padding: 0.5em;
		letter-spacing: 6px;
	}
`;
export const FormTop = styled(motion.div)`
	padding: 1em 3em;
	p {
		label {
			margin-left: 1rem;
			@media screen and (max-width: 604px) {
				margin-top: 1rem;
				&:last-child {
					margin-bottom: 0.5rem;
				}
			}
		}
		display: flex;
		@media screen and (max-width: 604px) {
			flex-direction: column;
		}
	}
	@media screen and (max-width: 604px) {
		padding: 0.4em 1em;
	}
`;
export const FormActions = styled.div`
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	ul {
		li {
			display: inline-block;
			&:nth-child(2) {
				float: right;
			}
			a {
				font-size: 1em;
				color: rgba(255, 255, 255, 0.5);
				text-decoration: none;
				transition: all 0.6s linear;
				font-style: italic;
				font-family: OpenSans-Regular;
				&:hover {
					font-weight: 700;
					color: #fff;
					font-size: 1.2em;
				}
			}
		}
	}
`;
export const FormBottom = styled.div`
	position: relative;
	&:after,
	&:before {
		position: absolute;
		top: -17px;
		width: 0;
		height: 0;
		border-top: 17px solid transparent;
		transition: all 0.5s linear;
		content: '';
	}

	&:before {
		left: -17px;
		border-right: 18px solid #fff;
	}

	&:after {
		right: -17px;
		border-left: 17px solid #fff;
	}
	.ripple {
		position: absolute;
		overflow: hidden;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.7);
		transform: scale(0);
		animation: ${ripple} 0.6s linear;
	}

	button {
		font-weight: 700;
		color: #fff;
		background: rgba(33, 150, 243, 0.5);
		outline: 0;
		padding: 1rem;
		border: none;
		width: 106%;
		margin-left: -0.7em;
		transition: all 0.5s linear;
		overflow: hidden;
		position: relative;
		cursor: pointer;
		text-transform: uppercase;

		&:hover {
			color: #000;
			background: #fff;
			&:before {
				border-right-color: #02a299;
			}
			&:after {
				border-left-color: #02a299;
			}
		}
	}
	p {
		color: #fff;
		margin-left: 2em;
		margin-top: 0.8rem;
	}
	small {
		color: #fff;
		font-style: italic;
		display: block;
		margin-left: 0.6rem;
	}
	@media screen and (max-width: 640px) {
		button {
			width: 106%;
			padding: 0.5em 0;
			margin-left: -0.4em;
		}
	}
`;
export const Seperator = styled.div`
	display: flex;
	flex-direction: row;
	/* justify-content: space-between; */
	padding: 10px;
	/* margin-bottom: 1rem; */
	justify-content: center;
	align-items: center;
	/* div {
		width: 100%;
		height: 2px;
		background: red;
	} */
`;
export const Devider = styled.div`
	align-items: center;
	background-color: #fff;
	height: 1px;
	justify-content: center;
	margin: 20px 10px;
	width: 40%;
`;
export const DeviderLable = styled.p`
	color: #fff;
	font-size: 16px;
	/* margin: 6px 0; */
`;
export const FildSpan = styled.span`
	transition: all 1s linear;
	display: block;
	left: 3rem;
	position: absolute;
	background: #fff;
	width: 0;
	height: 2px;
	top: 3rem;
`;
