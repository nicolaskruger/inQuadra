import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Colaborators } from '../app/Colaborators';
import { Slider } from '../app/commonComponents/Slider';
import { Header } from '../app/Header';
import { HowHelp } from '../app/HowHelp';
import { KnowProject } from '../app/KnowProject';
import { Sponsor } from '../app/Sponsor';

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <Slider />
      {/* <KnowProject />
      <HowHelp />
      <Colaborators />
      <Sponsor /> */}
    </main>
  );
};

export default Home;
