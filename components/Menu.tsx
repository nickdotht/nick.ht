import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { MenuItem } from "./MenuItem"

interface MenuProps {
}

const menuItems: { name: string, path: string }[] = [
  // {
  //   name: 'Home',
  //   path: '/',
  // },
  // {
  //   name: 'About',
  //   path: '/about',
  // },
  // {
  //   name: 'Blog',
  //   path: '/blog',
  // },
  // {
  //   name: 'Projects',
  //   path: '/projects',
  // },
]

export const Menu: FC<MenuProps> = () => {
  return (
    <Flex
      m="auto"
      mt="56px"
      columnGap="56px"
    >
      {menuItems.map(({ name, path }) => (
        <MenuItem key={`menu-item-${name}`} path={path}>
          {name}
        </MenuItem>
      ))}
    </Flex>
  )
}