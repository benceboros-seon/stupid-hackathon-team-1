import styled from 'styled-components';
import Radar from './Radar';

const Container = styled.div({
  left: '55%',
  top: '55%',
  position: 'absolute',
  zIndex: '10000',
})

const OfficeMap = () => (
  <Container>
    <Radar></Radar>
  </Container>
)

export default OfficeMap;
