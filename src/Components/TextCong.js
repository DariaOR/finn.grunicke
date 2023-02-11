import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function TextCong() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500, m: 5 }}>
      <Typography variant="h6" gutterBottom>
        Finn, HB!!!!{' '}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        You are become old
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        This is your personal SinglePageApplication
      </Typography>
      <Typography variant="body1" gutterBottom>
        Provide me your personal design and wishes, please
      </Typography>
    </Box>
  )
}
