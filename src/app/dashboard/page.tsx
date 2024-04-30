import {Container, Flex, Grid, GridCol, SimpleGrid, Text, rem} from '@mantine/core'
import {IconMapPinFilled} from '@tabler/icons-react'
import {recentlyUpdatedBooths} from '../../data/booths'
import ItemCard from './_components/BoothCard'

// This page will have map to search and see local booths in your area via map and list view.
export default function Page() {
  return (
    <Container>
      <Grid>
        <GridCol span={{base: 12, md: 10, lg: 10}}>
          <h1>Recently Updated</h1>
        </GridCol>

        <GridCol span={{base: 5, md: 2, lg: 2}} style={{paddingTop: '3rem'}}>

          <Flex>
            <IconMapPinFilled
              style={{width: rem(24), height: rem(24)}}
              stroke={1.5}
              color="var(--mantine-color-red-filled)"
            />
            <Text>Vancouver, Wa</Text>
          </Flex>

        </GridCol>
      </Grid>

      <SimpleGrid cols={{base: 1, sm: 2, lg: 3}} spacing="xl">
        {recentlyUpdatedBooths.map((booth) => (
          <ItemCard key={booth.id} booth={booth} />
        ))}
      </SimpleGrid>
    </Container >
  )
}