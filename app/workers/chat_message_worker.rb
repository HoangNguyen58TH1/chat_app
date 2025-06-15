class ChatMessageWorker
  include Sidekiq::Worker

  def perform(message)
    # Create message in database
    ChatMessage.create(content: message)

    # Broadcast to all connected clients
    byebug
    ActionCable.server.broadcast("chat_channel", { content: message })
  end
end
