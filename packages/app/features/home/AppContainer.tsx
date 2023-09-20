import { YStack, YStackProps } from '@my/ui'

function AppContainer(props: YStackProps) {
  return (
    <YStack w={'100%'} maw={1080} {...props}>
      {props.children}
    </YStack>
  )
}

export default AppContainer
