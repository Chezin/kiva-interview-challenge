import { Select, MenuItem } from '@mui/material';

const LoanAmountSelect = () => {
    return (
        <Select defaultValue={25} >
                <MenuItem value={25}>$25</MenuItem>
                <MenuItem value={50}>$50</MenuItem>
                <MenuItem value={100}>$100</MenuItem>
                <MenuItem value={200}>$200</MenuItem>
                <MenuItem value={300}>$300</MenuItem>
        </Select>
    );
};

export default LoanAmountSelect;
