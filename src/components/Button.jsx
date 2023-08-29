import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button color="primary" variant="text">Text</Button>
      <Button color="secondary" variant="contained" startIcon={<DeleteIcon />}>Contained</Button>
      <Button color="success" variant="outlined" startIcon={<AccountCircleIcon />}>xxx</Button>
    </Stack>
  );
}