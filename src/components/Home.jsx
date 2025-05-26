import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import btc from '../assests/btc.png';
import { motion } from 'framer-motion';

const MotionBox = motion(Box); 

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} overflow="hidden">
      <MotionBox
        h="80vh"
        animate={{
          translateY: "30px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={'full'}
          h={'85vh'}
          objectFit={'contain'}
          src={btc}
          filter={'grayscale(1)'}
        />
      </MotionBox>

      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.900'}
      >
        COINREX 69
      </Text>
    </Box>
  );
};

export default Home;
