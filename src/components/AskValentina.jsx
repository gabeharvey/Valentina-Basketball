/* eslint-disable react/prop-types */
import { Box, Text, VStack } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';

function AskValentinaCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#FF4500"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#505050"
        bgImage="linear-gradient(-45deg, #505050 25%, transparent 25%, transparent 50%, #505050 50%, #505050 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F8F8FF" h="30%">
          <Text fontSize="2xl" fontWeight="semibold" color="#000000" fontFamily="'Lobster Two', sans-serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#000000" fontFamily="'Roboto+Condensed', sans-serif">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function AskValentina() {
  const interview = {
    videoSrc: "valentina-interview.mp4",
    title: "Ask Valentina",
    description: "Player Q&A and Personal Insights",
  };

  const spinningBasketball = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 3000 },
    loop: true,
  });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }}
      mb={{ base: 12, md: 16 }}
    >
      <Text fontSize="4xl" fontWeight="medium" color="#7DF9FF" fontFamily="'Lobster Two', sans-serif">
        Ask Valentina
      </Text>
      <AskValentinaCard
        videoSrc={interview.videoSrc}
        title={interview.title}
        description={interview.description}
      />
      <Box
        w="100%"
        h="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        border="none"
      >
        <animated.img
          src="/basketball-1.png"
          alt="Spinning Basketball"
          style={{
            ...spinningBasketball,
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
    </VStack>
  );
}

export default AskValentina;
