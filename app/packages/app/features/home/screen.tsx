import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import lib from '@workspaces-test/lib'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>{lib()}</H1>
    </View>
  )
}
