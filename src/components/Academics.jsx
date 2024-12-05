import { Box, VStack, Heading, Flex, Link, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Academics() {
  const academicAchievements = [
    "Graduated with Honors from Incarnate Word",
    "Dean's List for 8 semesters",
    "Recipient of the Academic Excellence Scholarship",
    "Completed a major in Computer Science with a focus on AI",
    "Co-Founder of the Women in Tech Club at Incarnate Word",
    "Volunteered as a mentor for aspiring medical professionals"
  ];

  return (
    <VStack
      spacing={10}
      mt={12}
      align="center"
      p={{ base: 5, md: 10 }}
      minH="100vh"
      bgImage="url('/background-image.png')" 
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#7DF9FF" fontFamily="'Lobster Two', sans-serif" mb="5">
        Academics
      </Heading>

      <MotionBox
        w={{ base: '80%', md: '300px' }} 
        h="auto"
        m="5"
        bgColor="#7DF9FF"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#FF4500"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={0} 
        display="flex"
        flexDirection="column"
        alignItems="center"
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <Image 
          src="/ai-basketball-placeholder.png" 
          alt="Audri's Student Photo"
          borderRadius="12px"
          w="100%" 
          h="100%" 
          objectFit="cover" 
        />
      </MotionBox>

      <Flex direction="column" alignItems="center" width="100%">
        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="120px"
          m="5"
          bgColor="#F8F8FF"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#FF4500"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          alignItems="center"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Link
            fontFamily="'Lobster Two', sans-serif"
            fontWeight="bold"
            href="/path-to-transcripts"
            isExternal
            color="#000000"
            fontSize="lg"
            p={3}
            _hover={{ color: '#505050', textDecoration: 'underline' }}
            textAlign="center" 
            width="100%" 
            display="flex"
            justifyContent="center" 
            alignItems="center" 
          >
            View Transcripts
          </Link>
        </MotionBox>

        <MotionBox
          w={{ base: '90%', md: '500px' }}
          h="auto"
          m="5"
          bgColor="#F8F8FF"
          borderRadius="12px"
          borderWidth="4px"
          borderColor="#FF4500"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"  
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Text fontWeight="bold" fontSize="lg" color="#000000" mb="2" textAlign="center">
            Academic Achievements
          </Text>
          <VStack spacing={2} align="start" fontFamily="'Raleway', sans-serif" fontWeight="bold">
            {academicAchievements.map((achievement, index) => (
              <Text key={index} color="#000000">
                - {achievement}
              </Text>
            ))}
          </VStack>
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default Academics;