import { Flex, Slider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Colaborators } from '../components/Colaborators';
import { Header } from '../components/Header';
import { HowHelp } from '../components/HowHelp';
import { KnowProject } from '../components/KnowProject';
import { Sponsor } from '../components/Sponsor';

const Home: NextPage = () => {
  return (
    <Flex direction={"column"} w={"100%"}>
      <Header />
      <Slider />
      <KnowProject />
      <HowHelp />
      <Colaborators />
      <Sponsor />
    </Flex>
  );
};

export default Home;
