import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={'green.300'}
    >
      <VStack>
        <Text>Powered by Oguzhan Iptes. All rights reserved</Text>
      </VStack>
    </Box>
  );
}
