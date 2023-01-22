import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "footer footer"
                  `}
      gridTemplateRows={'60px 1fr 24px'}
      h='100vh'
      gap='1'
      fontWeight='bold'
    >
      <GridItem area={'header'}>
        <Navbar></Navbar>
      </GridItem>

      <GridItem area={'main'}>
        <Main></Main>
      </GridItem>

      <GridItem area={'footer'}>
        <Box>
          <Footer></Footer>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
