import { Button } from 'ui'
import { SampleService } from 'payments'

const Web = () => (
  <div>
    <h1>Web2</h1>
    <Button onClick={() => {}}>{SampleService.hello()}</Button>
  </div>
)

export default Web
