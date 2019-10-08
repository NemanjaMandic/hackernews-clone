// @Flow

import React from 'react';
import { Head, Title, LogoWrapper } from './style';
import Logo from '../Logo';

type PropsT = {
    logo: string,
    title: string,
    alt?: string
}
const Header = ({logo, title, alt}: PropsT) => {
    return ( 
        <Head>
            <LogoWrapper>
            <Logo src={logo} alt={alt} />
            </LogoWrapper>       
            <Title>{title}</Title>
        </Head>
     );
}
 
export default Header;