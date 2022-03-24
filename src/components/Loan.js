import React, { useEffect, useState } from 'react';
import {
    Grid,
    Skeleton,
    Button,
    CardMedia,
    Card,
    Typography,
    CardActions,
    CardContent
} from '@mui/material';
import { fetchLoans } from '../services/fetchLoans';
import Item from './Item';
import LoanAmountSelect from './LoanAmountSelect';
import LoanProgressBar from './LoanProgressBar';

const Loan = () => {
    const [loans, setLoans] = useState([{}]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchLoans().then((result) => {
            setLoans(result);
            setIsLoaded(true);
        })
    }, [])

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            display="flex"
            columns={3}
            xs={6} lg={3} xl={2}
        >
            {isLoaded ?
                loans.map(loan => {
                    return (
                        <Item>
                            <Grid item justifyContent="left">
                                <Card variant="outlined" sx={{ maxWidth: 330, maxHeight: 579 }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        width="480"
                                        image={loan.image.url}
                                        alt={loan.name}
                                        key={loan.id}
                                    />
                                    <CardContent>
                                        <Typography sx={{ fontSize: 24 }} variant="h5" color="primary" gutterBottom>
                                            {loan.name}
                                        </Typography>
                                        <Typography variant="h5" color="text.secondary" component="div">
                                            ${loan.loanAmount}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {loan.geocode.country.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {loan.whySpecial}
                                            <br />
                                        </Typography>
                                    </CardContent>

                                    <LoanProgressBar
                                        currentAmount={loan.loanFundraisingInfo.fundedAmount}
                                        totalAmount={loan.loanAmount}
                                    />

                                    <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <LoanAmountSelect />
                                        <Typography align='center'>
                                            <Button align='center' variant="contained" color="primary">Lend now</Button>
                                            <br />
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Item>
                    )
                })
                :
                <Skeleton></Skeleton>
            }
        </Grid>
    )
}

export default Loan;
