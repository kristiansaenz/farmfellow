import {Badge, Button, Container, Flex, Grid, GridCol, Image} from '@mantine/core'
import ImageCarousel from 'components/ImageCarousel'
import {myBooth} from 'data/booths'
import Link from 'next/link'

export default function Page() {

  const isBoothsEmpty = false

  if (isBoothsEmpty) {
    return (
      <Container h={700}>
        <h2>You have not created a booth yet 😧</h2>
        <Link href='/booths/new'>
          <Button>Create a Booth</Button>
        </Link>
      </Container>
    )
  }

  return (
    <>
      <Container h={375}>
        <ImageCarousel booth={myBooth} height={300} />

        <Image
          src="https://img.freepik.com/premium-psd/3d-illustration-smiling-caucasian-man-cartoon-close-up-portrait-standing-caucazian-man-with-mustache-gray-background-3d-avatar-ui-ux_1020-5076.jpg"
          alt="Avatar"
          h={200}
          w="auto"
          style={{
            borderRadius: '50%',
            border: '5px solid white',
            position: 'absolute',
            left: '20%',
            top: '30%',
          }}
        />
      </Container>

      <Container>
        <h1>{myBooth.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac posuere lectus. Nullam nec mollis nisl. Sed ultrices odio elit, quis euismod risus faucibus et. Cras vitae volutpat sem, vitae finibus libero. Proin varius sed sapien id sollicitudin. Proin condimentum rutrum fermentum. Mauris condimentum dapibus nunc, id pulvinar dui condimentum vitae. Duis non suscipit dui, sed maximus diam.</p>
        <Image h={200} src="https://i.stack.imgur.com/HILmr.png" alt="Map" />
      </Container>

      <Container>
        <h2>Items</h2>
        <Grid >
          <GridCol span={{base: 12, md: 6, lg: 3}}>
            <Flex>
              <Image h={100} w='auto' src="https://www.iconpacks.net/icons/2/free-apple-icon-3155-thumb.png" alt="Apple" />
              <Flex direction="column">
                <h4>Sweet Crisp Apple</h4>
                <Badge color="pink">$1.78 /lb</Badge>
              </Flex>
            </Flex>
          </GridCol>
          <GridCol span={{base: 12, md: 6, lg: 3}}>
            <Flex>
              <Image h={100} w='auto' src="https://static.vecteezy.com/system/resources/previews/018/931/605/original/cartoon-tomato-icon-png.png" alt="Apple" />
              <Flex direction="column">
                <h4>Campari Tomato</h4>
                <Badge color="pink">$1.20 /lb</Badge>
              </Flex>
            </Flex>
          </GridCol>
          <GridCol span={{base: 12, md: 6, lg: 3}}>
            <Flex>
              <Image h={100} w='auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5f-KlkZpbdgyABLFss4fSywBQ_xYUYuWx8_68Yr6IQ&s" alt="Apple" />
              <Flex direction="column">
                <h4>Asian Pear</h4>
                <Badge color="pink">$2.78 /lb</Badge>
              </Flex>
            </Flex>
          </GridCol>
          <GridCol span={{base: 12, md: 6, lg: 3}}>
            <Flex>
              <Image h={100} w='auto' src="https://static.vecteezy.com/system/resources/previews/002/740/169/non_2x/fresh-eggplant-icon-free-vector.jpg" alt="Apple" />
              <Flex direction="column">
                <h4>Eggplant</h4>
                <Badge color="pink">$3.00 /lb</Badge>
              </Flex>
            </Flex>
          </GridCol>
        </Grid>
      </Container>
    </>
  )
}