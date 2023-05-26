import styled from 'styled-components';

const Loading0 = () => (
  <div class="content">
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
  <div class="cuboid">
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
    <div class="side"></div>
  </div>
</div>
)

const Container = styled.div({
	margin: '0',
	padding: '0',
	width: '100vw',
	height: '100vh',
	overflow: 'hidden',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	perspective: '100vmin',
	background: 'radial-gradient(circle at 50% 100%, #212121, #000)',
})

export default () => (
  <Container>
    <Loading0 />
  </Container>
);
