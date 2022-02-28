import { Button, Pane, Text, majorScale, Dialog, Heading } from 'evergreen-ui'
import { Button as SharedButton } from 'ui'
import { SampleService } from 'payments'
import { useState } from 'react'

const Web = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <Pane alignItems="center" marginX={majorScale(2)}>
      <Heading size={900} marginBottom={16} marginTop={52}>Web</Heading>
      <Text>This is a sample of a web app.{' '}</Text>

      <Button onClick={() => setIsShown(true)}>
        {SampleService.hello()}
      </Button>


      <Dialog
        isShown={isShown}
        title="Sample dialog"
        onCloseComplete={() => setIsShown(false)}
        confirmLabel="Custom Label"
      >
        This is a dialog modal with a shared package button
        <SharedButton onClick={() => setIsShown(false)}>
          Shared UI
        </SharedButton>
      </Dialog>


    </Pane>
  )
}

export default Web
