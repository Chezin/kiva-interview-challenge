import { LinearProgress, Container, Typography } from '@mui/material'

const LoanProgressBar = ({ currentAmount, totalAmount }) => {
    const percentageRaised = (currentAmount * 100) / totalAmount;

    return (
        <Container>
            <LinearProgress variant="determinate" value={percentageRaised} />
            <Typography variant="subtitle2">
                ${totalAmount - currentAmount} to go
            </Typography>
        </Container>
    );
};

export default LoanProgressBar;
