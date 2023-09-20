import {
  XStack,
  Popover,
  Button,
  H1,
  YStackProps,
  Separator,
  Card,
  useThemeName,
  useMedia,
} from '@my/ui'
import { Image } from '@my/ui'
import AppContainer from './AppContainer'

import { useRouter } from 'next/router'
import { Menu } from '@tamagui/lucide-icons'

import { usePathname } from 'next/navigation'

export const Header = ({
  appContainerProps = {},
}: {
  title: string
  subtitle?: string
  appContainerProps?: YStackProps
}) => {
  const t = useThemeName()

  const router = useRouter()

  const media = useMedia()

  const p = usePathname()

  return (
    <XStack
      display={'flex'}
      bbc={'$borderColor'}
      backgroundColor={'$background'}
      zi={50000}
      ai={'center'}
      tag={'header'}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      pos="sticky"
      jc={'center'}
      top={0}
      left={0}
      h={'$6'}
      mah={'$6'}
      right={0}
      elevation={'$4'}
    >
      <AppContainer ai={'center'} fd={'row'} {...appContainerProps} px={'$5'} $gtSm={{ px: '$6' }}>
        <XStack ai={'center'} gap={'$2.5'}>
          <Card
            cur={'pointer'}
            br={'$4'}
            bg={t === 'light' ? 'transparent' : '$gray12'}
            onPress={() => {
              if (router.pathname.startsWith('/app')) {
                router.push('/app')
              }
            }}
          >
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1544786869728161792/X0E3ORKu_400x400.jpg',
                width: 28,
                height: 28,
              }}
              br={'$4'}
              w={28}
              h={28}
            ></Image>
          </Card>

          {p?.startsWith('/app/') ? (
            <Button
              icon={<Menu size={22} />}
              $gtSm={{ display: 'none' }}
              size={'$2.5'}
              px={'$1.5'}
              chromeless
            ></Button>
          ) : (
            <></>
          )}
        </XStack>
        <XStack ml={'auto'} ai={'center'} space={'$4'}>
          <Button
            theme={'blue_alt1'}
            size={'$3'}
            $gtSm={{ size: '$4' }}
            onPress={() => {
              window.open('/info', '_blank')
            }}
          >
            About Us
          </Button>
        </XStack>
      </AppContainer>
    </XStack>
  )
}
