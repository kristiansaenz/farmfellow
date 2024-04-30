import {Card, CardSection, Flex, Group, Text, rem} from '@mantine/core'
import {IconMapPinFilled} from '@tabler/icons-react'
import Link from 'next/link'
import ImageCarousel from './ImageCarousel'

export default function BoothCard({booth}) {

  const boothUrl = `/booths/${booth.id}`

  const Location = () => (
    <Flex justify={{sm: 'left'}}>
      <IconMapPinFilled
        style={{width: rem(16), height: rem(16)}}
        stroke={1.5}
        color="var(--mantine-color-red-filled)"
      />
      <Text size="sm" c="dimmed">
        {booth.location}
      </Text>
    </Flex>
  )

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <CardSection>
        {/* TODO: Needs to take in booth.images */}
        <ImageCarousel booth={booth} />
      </CardSection>

      <Link href={boothUrl} style={{textDecoration: 'none', color: 'black'}}>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{booth.name}</Text>
        </Group>

        <Location />
      </Link>
    </Card>
  )
}