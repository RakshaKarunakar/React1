import * as React from 'react';
import '../color.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function RegTextFields() {
  return (
    <center>
      <div className="regbox">

        <h1 style={{ marginTop: "10px" }}>REGISTRATION FORM </h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Name" variant="standard" />
            </Box></div>
            <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Email" variant="standard" />
            </Box></div>
            <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Phone" variant="standard" />
            </Box></div>
            <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Address" variant="standard" />
            </Box></div>
            <div><Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <SchoolIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="input-with-sx" label="Qualification" variant="standard" />
            </Box></div>

        </Box><div>

          <Stack spacing={2} direction="row" alignButton="center">

            <Button variant="contained" endIcon={<SendIcon />}>SUBMIT </Button>

          </Stack>
        </div>
      </div>
    </center>
  );
}