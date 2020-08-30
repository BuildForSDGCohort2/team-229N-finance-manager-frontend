import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
	visible: number;
}
const LockerWraper = styled.div`
	position: absolute;
	left: 30%;
	top: 14%;
	transition: all 0.7s linear;
	transform: scale(${(props: Props) => props.visible || 0});
	span {
		font-size: 15em;
	}
	@media screen and (max-width: 600px) {
		left: 30%;
		top: 14%;
		span {
			font-size: 12em;
		}
	}
`;
// interface Props {
// 	lockShow: boolean;
// 	unlocker: boolean;
// }
export const Locker: FC<{
	lockShow: boolean;
}> = ({ lockShow }) => {
	const visible: number = lockShow ? 1 : 0;
	return (
		<LockerWraper visible={visible}>
			<span className='material-icons red-text'>lock</span>
		</LockerWraper>
	);
};
export const Unlocker: FC<{
	unlocker: boolean;
}> = ({ unlocker }) => {
	const visible: number = unlocker ? 1 : 0;
	return (
		<LockerWraper visible={visible}>
			<span className='material-icons green-text'>lock_open</span>
		</LockerWraper>
	);
};
