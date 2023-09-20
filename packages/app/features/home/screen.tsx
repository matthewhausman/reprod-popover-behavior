import {
  Anchor,
  Button,
  H1,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  useTheme,
  useToastController,
  useWindowDimensions,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import SearchComp from './OrderSearch'
import AppContainer from './AppContainer'
import { Header } from './Header'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  const dimensions = useWindowDimensions()
  const theme = useTheme()

  return (
    <>
      <Header title={'CZero'} appContainerProps={{ px: '$6', maw: 1600 }} />

      <AppContainer
        mx={'auto'}
        f={1}
        mt={'$3'}
        mb={'$8'}
        maw={1600}
        px={'$5'}
        $gtSm={{ px: '$6', mt: '$6' }}
        pos={'relative'}
      >
        <YStack f={1} $gtSm={{ fd: 'row' }}>
          <ScrollView
            pt={'$3'}
            $gtSm={{ pl: '$6', pt: 0 }}
            f={1}
            ov={'visible'}
            contentContainerStyle={{ flex: 1 }}
          >
            <YStack
              h={'100%'}
              gap={'$2.5'}
              separator={<Separator />}
              f={1}
              $gtSm={{ f: undefined }}
              mah={'800px'}
            >
              <XStack w={'100%'} jc={'space-between'}>
                <Button />
                <SearchComp />
              </XStack>
            </YStack>
          </ScrollView>
        </YStack>
      </AppContainer>
    </>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="lazy"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
