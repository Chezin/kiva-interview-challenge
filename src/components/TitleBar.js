import { Typography } from '@mui/material'

const TitleBar = ({ title, description }) => {
    return (    
        <div>
            <Typography variant="h1" sx={{ fontSize: 48 }}>
                { title }
            </Typography>
            <Typography variant="h2" sx={{ fontSize: 17 }} marginBottom='30px'>
                { description }
            </Typography>
        </div>
    );
};

export default TitleBar;