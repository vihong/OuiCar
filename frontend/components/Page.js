import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const themeOuiCar = {
	red         : '#FF0000',
	greenOuiCar : '#008a83',
	black       : '#393939',
	grey        : '#3A3A3A',
	lightgrey   : '#E1E1E1',
	offWhite    : '#EDEDED',
	maxWidth    : '1000px',
	bs          : '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
	background: white
	color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
	border: 1px solid black;
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={themeOuiCar}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
