import { Box, Container } from '@mui/material';
import Loan from './components/Loan';
import TitleBar from './components/TitleBar';
import bundle from './bundles/bundle'

const App = () => {
  return (
    <div className="App">
      <Container>
        <Box>
          <TitleBar
            title={bundle.LOAN_ARTS_PAGE_TITLE}
            description={bundle.LOAN_ARTS_PAGE_DESCRIPTION}
          />
        </Box>
      </Container>
      <Box
        display="flex"
        alignItems="center"
        sx={{ flexGrow: 1 }}
        justifyContent="center"
      >
        <Loan />
      </Box>
    </div>
  );
}

export default App;
