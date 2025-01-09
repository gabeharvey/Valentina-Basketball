import { Box, Text, VStack, Heading, Flex } from '@chakra-ui/react'; // Add Image Import when offer received
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Offers() {
  // const offers = [
  //   {
  //     schoolName: "University",
  //     logo: "utsa-logo.png", 
  //     description: "Full athletic scholarship",
  //   },
  //   {
  //     schoolName: "College",
  //     logo: "texas-logo.png",
  //     description: "Full athletic scholarship",
  //   },
  // ];

  return (
    <VStack
      spacing={10}
      p={6}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" mb="5" textAlign="center">
        Scholarship Offers
      </Heading>
      <Flex
        direction="column" 
        alignItems="center"
        width="100%"
      >
        {/* Box for "No Scholarship Offers" */}
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="150px"
          minW="320px"
          m="5"
          bgColor="#F8F8FF"
          bgImage="linear-gradient(-45deg, #F8F8FF 25%, transparent 25%, transparent 50%, #F8F8FF 50%, #F8F8FF 75%, transparent 75%, transparent)"
          bgSize="1px 1px"
          borderRadius="12px"
          borderWidth="5px"
          borderColor="#FF4500"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center" 
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Text color="#000000" fontWeight="bold" fontFamily="'Raleway', sans-serif" fontSize="lg">
            No Scholarship Offers
          </Text>
        </MotionBox>

        {/* {offers.map((offer, index) => (
          <MotionBox
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="150px"
            minW="320px"
            m="5"
            bgColor="#F8F8FF"
            bgImage="linear-gradient(-45deg, #F8F8FF 25%, transparent 25%, transparent 50%, #F8F8FF 50%, #F8F8FF 75%, transparent 75%, transparent)"
            bgSize="1px 1px"
            borderRadius="12px"
            borderWidth="5px"
            borderColor="#FF4500"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Image
              src={offer.logo}
              alt={`${offer.schoolName} logo`}
              boxSize="80px"
              objectFit="contain"
              borderRadius="8px"
              mr={4}
            />
            <Box>
              <Text color="#000000" fontWeight="bold" fontFamily="'Lobster Two', sans-serif" fontSize="lg">
                {offer.schoolName}
              </Text>
              <Text color="#000000" fontFamily="'Raleway', sans-serif" fontSize="md" fontWeight="semibold" mt={1}>
                {offer.description}
              </Text>
            </Box>
          </MotionBox>
        ))} */}
      </Flex>
    </VStack>
  );
}

export default Offers;