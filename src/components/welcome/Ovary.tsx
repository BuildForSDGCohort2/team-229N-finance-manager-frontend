import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	display?: string;
}
const OverlayWraper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 100;
	display: ${(props: Props) => props.display || 'none'};
	overflow: hidden;
	div:first-child {
		position: absolute;
		top: 40%;
		left: 50%;
		width: 20px;
		height: 20px;
		background: 0 0;
		border-radius: 50%;
		box-shadow: 30px 30px 0 5px #2ecc71, -30px 30px 0 5px #eb7e22,
			30px -30px 0 5px #e74c3c, -30px -30px 0 5px #3f51b5, 0 -45px 0 5px #f1c40f,
			0 45px 0 5px #9b59b6, 45px 0 0 5px #f39c12, -45px 0 0 5px #1abc9c;
		animation: animate 3s linear infinite;
		@keyframes animate {
			0% {
				box-shadow: 0 0 0 #2ecc71, 0 0 0 #eb7e22, 0 0 0 #e74c3c, 0 0 0 #3f51b5,
					0 0 0 #f1c40f, 0 0 0 #9b59b6, 0 0 0 #f39c12, 0 0 0 #1abc9c;
				transform: rotate(0);
			}

			25% {
				box-shadow: 30px 30px 0 5px #2ecc71, -30px 30px 0 5px #eb7e22,
					30px -30px 0 5px #e74c3c, -30px -30px 0 5px #3f51b5,
					0 -45px 0 5px #f1c40f, 0 45px 0 5px #9b59b6, 45px 0 0 5px #f39c12,
					-45px 0 0 5px #1abc9c;
				transform: rotate(360deg);
			}

			75% {
				box-shadow: 30px 30px 0 5px #2ecc71, -30px 30px 0 5px #eb7e22,
					30px -30px 0 5px #e74c3c, -30px -30px 0 5px #3f51b5,
					0 -45px 0 5px #f1c40f, 0 45px 0 5px #9b59b6, 45px 0 0 5px #f39c12,
					-45px 0 0 5px #1abc9c;
				transform: rotate(720deg);
			}

			100% {
				box-shadow: 0 0 0 #2ecc71, 0 0 0 #eb7e22, 0 0 0 #e74c3c, 0 0 0 #3f51b5,
					0 0 0 #f1c40f, 0 0 0 #9b59b6, 0 0 0 #f39c12, 0 0 0 #1abc9c;
				transform: rotate(1440deg);
			}
		}
		@media screen and (max-width: 640px) {
			left: 42%;
		}
	}
	div:last-child {
		position: absolute;
		color: #fff;
		left: 43%;
		top: 55%;
		font-size: 2em;
		/* font-weight: 700; */
		@media screen and (max-width: 640px) {
			left: 26%;
		}
	}
`;
interface Props {
	showOvary?: boolean;
}

type Display = 'block' | 'none';

const Ovary: FC<Props> = ({ showOvary }) => {
	const display: Display = showOvary ? 'block' : 'none';
	return (
		<OverlayWraper display={display}>
			<div />
			<div>PLEASE WAIT....</div>
		</OverlayWraper>
	);
};

export default Ovary;
