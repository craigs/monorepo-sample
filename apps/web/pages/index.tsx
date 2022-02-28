import { Button } from 'ui'
import { SampleService } from 'payments'

const Web = () => (
  <div>
    <h1>Web</h1>
    <Button>{SampleService.hello()}</Button>
  </div>
)

export default Web
