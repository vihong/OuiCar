import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import PageContainerStyles from './styles/PageContainerStyles';

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
	background: white;
	color: ${(props) => props.theme.black};
`;

const BackgroundDivStyles = styled.div`
	background-image: url(https://images.pexels.com/photos/769892/pexels-photo-769892.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
	background-position: center;
	background-size: cover;
	height: 80vh;
	display: flex;
	justify-content: flex-start;
	align-content: flex-end;
	position: relative;
	bottom: 10px;
`;

const SloganStyles = styled.h1`
	margin-right: auto;
	margin-top: auto;
	padding-left: 3rem;
	position: relative;
	bottom: 15rem;
	text-align: center;
	color: ${(props) => props.theme.greenOuiCar};
	line-height: 150%;
	span {
		color: snow;
	}
`;

const CallToActionStyles = styled.p`
	background: ${(props) => props.theme.greenOuiCar};
	display: inline-block;
	color: white;
	padding: 0.8rem 2rem;
	transform: rotate(-3deg);
	position: relative;
	bottom: 2rem;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

injectGlobal`
    @font-face {
        font-family: 'Lato', sans-serif;
        src: url('https://fonts.googleapis.com/css?family=Lato&display=swap');
        format: ('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html{
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height:2;
        font-family: 'Lato', sans-serif;
    }
    a {
        text-decoration: none;
        color: ${themeOuiCar.black};
    }
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={themeOuiCar}>
				<StyledPage>
					<Meta />
					<Header />
					<BackgroundDivStyles>
						<SloganStyles>
							Avec OUICAR+,<br />
							<span>faites plus que louer une voiture</span>
							<br />
							<CallToActionStyles>
								... améliorez l'expérience !
							</CallToActionStyles>
						</SloganStyles>
					</BackgroundDivStyles>
					<PageContainerStyles>
						{this.props.children}
					</PageContainerStyles>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
