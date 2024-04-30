"use client"
import {useState} from 'react'
import {Container, Group, Burger, Avatar, Flex, rem} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import classes from 'css/header.module.css'
import {useRouter} from 'next/navigation'
import {IconLemon} from '@tabler/icons-react'

const links = [
  {link: '/dashboard', label: 'Dashboard'},
  {link: '/explore', label: 'Explore'},
]

const styles = {
  backgroundColor: '#5CE9A7'
}

export function HeaderSimple() {
  const [opened, {toggle}] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const router = useRouter()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
        router.push(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  const AppLogo = () => (
    <Flex>
      {/* <IconLemon
              style={{width: rem(24), height: rem(24)}}
              stroke={1.5}
            /> */}
      <h2>FarmFellow</h2>
    </Flex>
  )

  return (
    <header className={classes.header} style={styles}>
      <Container size="md" className={classes.inner}>
        <AppLogo />

        <Flex>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
          <Avatar color="cyan" radius="xl">KS</Avatar>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Flex>

      </Container>
    </header>
  )
}