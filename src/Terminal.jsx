import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OfficeMap from './OfficeMap';
import Loading0 from './Loading0';
import Loading1 from './Loading1';
import Loading2 from './Loading2';
import Loading3 from './Loading3';

const Container = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex'
})

const answerMap = [
  '$ What is your name?', 'My name is Club Mate Locator',
  '$ What is your quest?', 'To find the holy Club Mate',
  '$ What is your favorite flavor?', 'Club Mate coke',
  '$ What is the airspeed velocity of an unladen swallow?', 'African or European?',
  '$ What is the answer to life, the universe, and everything?', '42',
  '$ Where can I find the coke flavored Club Mate?', 'Not in the fridge',
  '$ Where is the closest coke flavored Club Mate?', 'radar', 'Look under your sofa',
  '$ You might be thinking this is a scam, but it is not.', 'It is not a scam',
  '$ Where is the closest Club Mate now?', 'Just appeared on the table',
  '$ How are you doing that? I am scared.', 'I am not doing anything', 'It\'s big data'
]

let currentIndex = 0;

async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the Club Mate Locator!</TerminalOutput>
  ]);

  const [showRadar, setShowRadar] = useState(false);
  const [isLoading0, setIsLoading0] = useState(true);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  
  useEffect(() => {setTimeout(() => {
    setIsLoading0(false);
    setIsLoading1(true);
  }, 5000)}, [])
  useEffect(() => {setTimeout(() => {
    setIsLoading1(false);
    setIsLoading2(true);
  }, 10000)}, [])
  useEffect(() => {setTimeout(() => {
    setIsLoading2(false);
    setIsLoading3(true);
  }, 15000)}, [])
  useEffect(() => {setTimeout(() => {
    setIsLoading3(false);
  }, 22000)}, [])


  if (isLoading0) {
    return <Loading0></Loading0>
  }

  if (isLoading1) {
    return <Loading1></Loading1>
  }

  if (isLoading2) {
    return <Loading2></Loading2>
  }

  if (isLoading3) {
    return <Loading3></Loading3>
  }


  const onInput = async (terminalInput) => {
    if (terminalInput === '') {
      if (answerMap[currentIndex] === 'radar') {
        setShowRadar(true);
        setTimeout(() => {setShowRadar(false)}, 8000);
        currentIndex += 1;
        await sleep(8000);
      }

      setTerminalLineData([
        ...terminalLineData,
        <TerminalOutput key={ terminalLineData.length }>{ answerMap[currentIndex] }</TerminalOutput>
      ]);
      currentIndex += 1;
    }
  }

  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <>
      <Container>
        <Terminal name='Club Mate Locator' colorMode={ ColorMode.Light } onInput={ onInput } >
          { terminalLineData }
        </Terminal>
      </Container>
      {showRadar && <OfficeMap></OfficeMap>}
    </>
  )
};
export default TerminalController;
