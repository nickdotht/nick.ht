import { Text, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

interface MenuItemProps {
  children: React.ReactNode
  path: string
}

export const MenuItem: FC<MenuItemProps> = ({ children, path }) => {
  const router = useRouter()
  const isActive = router.pathname === path

  return (
    <Link href={path} passHref>
      <ChakraLink
        color={isActive ? 'primary' : '#fff'}
        _hover={{
          color: 'primary',
        }}
      >
        {children}
      </ChakraLink>
    </Link>
  )
}