import * as React from 'react'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'

export default function Gallery() {
  return (
    <Card sx={{ minHeight: '358px', width: 358 }}>
      <CardCover>
        <img
          src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/89380400_2027643920714880_732240302522810938_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=GqbZSGOOewkAX8qMQUr&tn=E9GSjqlQqJ8KoJRL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBKhxl2JwoSy7xWLq72nPi79ENl9FH7KfwbLg5WVkA5VQ&oe=63EBEFD3&_nc_sid=8fd12b"
          srcSet="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/89380400_2027643920714880_732240302522810938_n.jpg?stp=dst-jpg_e35_s480x480&_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=100&_nc_ohc=GqbZSGOOewkAX8qMQUr&tn=E9GSjqlQqJ8KoJRL&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBKhxl2JwoSy7xWLq72nPi79ENl9FH7KfwbLg5WVkA5VQ&oe=63EBEFD3&_nc_sid=8fd12b 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          Yosemite National Park
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          California, USA
        </Typography>
      </CardContent>
    </Card>
  )
}
