import Logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="dtmoney logo"/>

        <button>nova transação</button>
      </Content>
    </Container>
  );
}