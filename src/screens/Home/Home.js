import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { WrapperView, HeaderTitle, Header, Logo } from './styled';
import HomeDetails from '../../components/HomeDetails';
import img from '../../assets/logo-mobile.png';

const Home = () => {
	return (
		<LinearGradient colors={['#48BCDF', '#5ABEB9', '#9cf184', '#9cf184']} locations={[0.1, 0.3, 0.6, 1]}>
			<WrapperView>
				<Header>
					<Logo source={img} resizeMode="cover" testID="image-element" />
					<HeaderTitle center>Meus investimentos</HeaderTitle>
				</Header>
				<HomeDetails />
			</WrapperView>
		</LinearGradient>
	);
};

export default Home;
