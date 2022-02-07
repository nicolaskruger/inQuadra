import { Flex, Slider } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Colaborators } from '../Colaborators';
import { Header } from '../Header';
import { HowHelp } from '../HowHelp';
import { KnowProject } from '../KnowProject';
import { Sponsor } from '../Sponsor';

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
