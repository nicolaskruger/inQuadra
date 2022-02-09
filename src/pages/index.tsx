import { Flex, Slider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Colaborators } from '../app/Colaborators';
import { Header } from '../app/Header';
import { HowHelp } from '../app/HowHelp';
import { KnowProject } from '../app/KnowProject';
import { Sponsor } from '../app/Sponsor';

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
