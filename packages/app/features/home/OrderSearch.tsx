import { Paragraph, Popover, XStack, YStack, Button } from '@my/ui'
import { Search } from '@tamagui/lucide-icons'

export default function SearchComp() {
  return (
    <XStack>
      <Popover placement="bottom">
        <Popover.Trigger>
          <XStack>
            <Button p={'$2.5'} theme={'blue'} icon={<Search size={20} />} />
          </XStack>
        </Popover.Trigger>
        <Popover.Content
          theme={'blue'}
          zIndex={199000}
          borderWidth={1}
          borderColor="$borderColor"
          enterStyle={{ x: 0, y: -10, opacity: 0 }}
          exitStyle={{ x: 0, y: -10, opacity: 0 }}
          x={0}
          y={0}
          opacity={1}
          p={0}
          w={400}
          animation={'lazy'}
          elevate
        >
          <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
          <YStack p={'$3'} ai={'flex-start'} w={'100%'}>
            <YStack w={'100%'}>
              <Paragraph size={'$5'} col={'$color11'}>
                Drivers
              </Paragraph>
            </YStack>
          </YStack>
        </Popover.Content>
      </Popover>
    </XStack>
  )
}
