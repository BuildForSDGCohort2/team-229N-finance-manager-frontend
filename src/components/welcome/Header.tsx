import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
	width: 100%;
	height: 90px;
	display: flex;
	/* border: 1px solid red; */
	padding: 20px;
	/* position: fixed;
	top: 0;
	left: 0; */
`;
const Header = () => {
	return (
		<Container>
			<h2>FINANCE MANAGER</h2>
		</Container>
	);
};

export default Header;
