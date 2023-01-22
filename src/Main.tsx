import { Box, Button, Center, Flex, FormControl, FormHelperText, FormLabel, Grid, GridItem, HStack, Input, Radio, RadioGroup, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from "@chakra-ui/react";


export default function Main() {
    return (
        <Center bgColor={'green.50'} className='main'>
            <Grid w={'100vw'} templateColumns='repeat(2, 1fr)' gap={4}>
                <GridItem w='100%' h='90vh'>
                    <VStack spacing={24} pt={12}>
                        <VStack spacing={8}>
                            <Text>GIVE AN ORDER</Text>
                            <VStack>
                                <Input placeholder="Product ID" _placeholder={{ opacity: 0.75, color: 'black' }} required type='text' />
                                <Input placeholder="Supplier address" _placeholder={{ opacity: 0.75, color: 'black' }} required type='text' />
                                <Input placeholder="Your company address" _placeholder={{ opacity: 0.75, color: 'black' }} required type={'text'} />
                                <Input placeholder="Amount" _placeholder={{ opacity: 0.75, color: 'black' }} required type={'number'} />
                            </VStack>
                            <Button colorScheme={'green'}>ORDER</Button>
                        </VStack>
                    </VStack>
                </GridItem>

                <GridItem w='100%' h='90vh'>
                    <VStack spacing={24} pt={12}>
                        <VStack spacing={8}>
                            <Text>PRODUCT ACCEPTANCE</Text>
                            <VStack px={8}>
                                <Input placeholder="Product ID" _placeholder={{ opacity: 0.75, color: 'black' }} required type='text' />
                                <Input placeholder="Supplier address" _placeholder={{ opacity: 0.75, color: 'black' }} required type='text' />
                                <Input placeholder="Your company address" _placeholder={{ opacity: 0.75, color: 'black' }} required type={'text'} />
                            </VStack>
                            <RadioGroup>
                                <HStack spacing={16}>
                                    <Radio colorScheme={'green'} value='true'>Accept</Radio>
                                    <Radio colorScheme={'green'} value='false'>Refuse</Radio>
                                </HStack>
                            </RadioGroup>
                            <Button colorScheme={'green'}>APPROVE</Button>
                        </VStack>

                        
                    </VStack>
                </GridItem>
            </Grid>

        </Center>
    );
}