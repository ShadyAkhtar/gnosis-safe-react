import React from 'react'
import { FixedDialog, Text } from '@gnosis.pm/safe-react-components'

interface OwnProps {
  onCancel: () => void
  onConfirm: () => void
}

const LegalDisclaimer = ({ onCancel, onConfirm }: OwnProps): JSX.Element => (
  <FixedDialog
    body={
      <>
        <Text size="md">
          You are now accessing third-party apps, which we do not own, control, maintain or audit. We are not liable for
          any loss you may suffer in connection with interacting with the apps, which is at your own risk. You must read
          our Terms, which contain more detailed provisions binding on you relating to the apps.
        </Text>
      </>
    }
    onCancel={onCancel}
    onConfirm={onConfirm}
    title="Disclaimer"
  />
)

export default LegalDisclaimer
