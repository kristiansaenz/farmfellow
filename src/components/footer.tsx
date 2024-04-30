"use client"
import {Anchor, Container, Group} from '@mantine/core'
import classes from 'css/footer.module.css'

const links = [
  {link: '#', label: 'About'},
  {link: '#', label: 'Contact'},
  {link: '#', label: 'Privacy'},
]

const styles = {
  backgroundColor: '#5CE9A7'
}

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer} style={styles}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  )
}