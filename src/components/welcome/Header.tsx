import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Link as Scroll, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { Redirect } from 'react-router-dom';
// import logo from '../../asset/fm.png';
const Container = styled(motion.div)`
	width: 100%;
	height: 70px;
	display: flex;
	padding: 13px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background-color: rgba(45, 34, 84, 0.8);
`;
const H1 = styled.h1`
	font-family: 'BlackOpsOne-Regular';
	font-size: 30px;
	text-transform: uppercase;
	text-shadow: 7px 6px 15px #02a299;
	flex-grow: 1;
	cursor: pointer;
	text-align: left;
`;
const Links = styled.ul`
	display: flex;
	align-self: center;
	margin-right: 20px;
	li {
		a {
			cursor: pointer;
			&:hover {
				color: orange;
				text-decoration: underline;
			}
		}
		font-size: 22px;
		margin: 0 20px;
	}
`;
const Header: FC<{ isHome: boolean }> = ({ isHome }) => {
	const [redirect, setRedirect] = useState(false);
	const scrollToTop = () => {
		if (isHome) {
			scroll.scrollToTop();
		} else setRedirect(true);
	};
	if (redirect) {
		return <Redirect to='/' exact />;
	}
	return (
		<>
			<Container initial={{ x: '-100%' }} animate={{ x: 0 }}>
				<H1 onClick={scrollToTop}>Finance manager</H1>
				{isHome && (
					<Links>
						<li>
							<Scroll
								activeClass='activeScroll'
								to='section1'
								spy={true}
								smooth={true}
								offset={-70}
								duration={900}>
								Home
							</Scroll>
							{/* <Link to='/'>Home</Link> */}
						</li>
						<li>
							<Scroll
								activeClass='activeScroll'
								to='section2'
								spy={true}
								smooth={true}
								offset={-70}
								duration={900}>
								Reports
							</Scroll>
							{/* <Link to='/'>Reports</Link> */}
						</li>
						<li>
							<Scroll
								activeClass='activeScroll'
								to='section3'
								spy={true}
								smooth={true}
								offset={-70}
								duration={900}>
								Get started
							</Scroll>
							{/* <Link to='/'>Get started</Link> */}
						</li>
					</Links>
				)}
			</Container>
			<br /> <br />
			<br />
		</>
	);
};

export default Header;
