import styled from 'styled-components';

const Loading2 = () => (
  <div class="pl">
	<div class="pl__sphere"></div>
	<span class="pl__sphere-shadow"></span>
	<div class="pl__sphere"></div>
	<span class="pl__sphere-shadow"></span>
	<div class="pl__sphere"></div>
	<span class="pl__sphere-shadow"></span>
	<div class="pl__sphere"></div>
	<span class="pl__sphere-shadow"></span>
</div>
)

const Container = styled.div({
  font: '1em/1.5 sans-serif',
  height: '100vh',
  border: '0',
  boxSizing: 'border-box',
  margin: '0',
  padding: '0',
})

export default () => (
  <Container>
    <Loading2 />
  </Container>
);
