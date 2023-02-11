import {
  Card,
  Select,
  CardContent,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Box,
} from '@mui/material'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

// sx={{ minWidth: 120 }}

export default function EmailForm() {
  const [eventType, setEventType] = useState('')

  const handleChange = (event) => {
    setEventType(event.target.value)
  }

  function sendEmail(event) {
    event.preventDefault()

    emailjs
      .sendForm('gmail', 'template_wz3elcn', event.current, 'dhfP7XWg1TQaHZI_G')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }
  return (
    <Card sx={{ maxWidth: 400, mb: 5 }}>
      <Box
        component="form"
        sx={{
          pt: 5,
          pb: 4,

          '& > :not(style)': { m: 1, width: '25ch' },
          backgroundColor: '#e0f2f1',
        }}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <TextField required id="outlined-required1" label="Your name" />
        <TextField required id="outlined-required2" label="Your family name" />
        <TextField required id="outlined-required3" label="Phone number" />

        <FormControl fullWidth>
          <TextField
            select
            label="Choose your special day"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="Choose an event"
            value={eventType}
            onChange={handleChange}
          >
            <MenuItem value={'BD'}>Child delivery process</MenuItem>
            <MenuItem value={'W'}>Wedding</MenuItem>
            <MenuItem value={'F'}>Funeral ceremony</MenuItem>
          </TextField>
        </FormControl>

        <TextField fullWidth label="Your text" id="fullWidth" />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#006064',
            '&:hover': {
              backgroundColor: '#004d40',
            },
          }}
          onSubmit={sendEmail}
        >
          Send
        </Button>
      </Box>
    </Card>
  )
}
