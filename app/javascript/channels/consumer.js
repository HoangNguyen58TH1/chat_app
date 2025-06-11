// WebSocket client library of Rails
import { createConsumer } from "@rails/actioncable"
import * as ActionCable from '@rails/actioncable'

ActionCable.logger.enabled = true

export default createConsumer()
console.log('--- consumer.js ---')
