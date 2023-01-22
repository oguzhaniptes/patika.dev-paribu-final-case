import { ethers, providers } from "ethers";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Button,
    Text,
    Divider,
    useToast,
} from '@chakra-ui/react';

import { Image } from '@chakra-ui/image';
import useConnection from '../hooks/useConnection';
import useContract from '../hooks/useContract';
import { useState } from "react";



export default function Navbar() {

    const [connBtnText, setConnBtnText] = useState("Connect Wallet");
    const [account, setAccount] = useState("");
    const [provider, setProvider] = useState<any>(null);
    const toast = useToast();

    function connectWallet() {
        if (!window.ethereum) {
            alert("Metamask is not installed.");
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        setProvider(provider);

        provider
            .send("eth_requestAccounts", [])
            .then((accounts) => {
                setAccount(account[0]);
                setConnBtnText(accounts);
                toast({
                    containerStyle: {
                        paddingBottom: "2em",
                        paddingRight: "2em",
                    },
                    title: `Wallet successfully linked.`,
                    status: `success`,
                    isClosable: true,
                    position: "bottom-right",
                });
            })
            .catch(() =>
                toast({
                    containerStyle: {
                        paddingBottom: "2em",
                        paddingRight: "2em",
                    },
                    title: `Wallet failed to connect.`,
                    status: `error`,
                    isClosable: true,
                    position: "bottom-right",
                })
            );

        const signer = provider.getSigner();
        signer.getAddress().then((address) => console.log(address));
        console.log(signer);
    }

    return (
        <Box bg={'green.200'} px={4} className='navbar'>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                <HStack spacing={8} alignItems={'center'}>
                    <Image h={'60px'} w={'200px'} src={'../public/logo.png'}></Image>
                    <Box pl={8}>
                        <Text textColor={'blackAlpha.900'} fontSize={'xl'}>Supply Chain Control Center</Text>
                    </Box>
                    <Divider colorScheme={'facebook'} h={12} orientation='vertical' />
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        <Button variant={'ghost'} colorScheme={'green'} textColor={'blackAlpha.800'} >Ordes</Button>
                        <Button variant={'ghost'} colorScheme={'green'} textColor={'blackAlpha.800'} >Customers</Button>
                    </HStack>
                </HStack>
                <HStack spacing={8} px={4}>
                    <Button onClick={() => {
                        if (account) return;
                        connectWallet();
                    }} colorScheme={'red'} variant={'solid'}>{connBtnText}</Button>
                    <Avatar
                        size={'md'}
                        src={
                            'https://miro.medium.com/max/600/1*_bLztZTVKgTeRUvkKmrGnQ.png'
                        }
                    />
                </HStack>
            </Flex>
        </Box>
    );
}