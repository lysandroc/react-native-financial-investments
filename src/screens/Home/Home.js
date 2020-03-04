import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { WrapperView, HeaderTitle, Header, Logo } from './styled';
import HomeDetails from '../../components/HomeDetails';
import img from '../../assets/logo-mobile.png';

const Home = () => {
	return (
		<LinearGradient colors={['#5ABEB9', '#9cf184', '#9cf184']} locations={[0.5, 0.9, 1]}>
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
