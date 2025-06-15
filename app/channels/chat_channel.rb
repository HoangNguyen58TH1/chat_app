class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # call by method speak from Client
  def speak(data)
    byebug
    ChatMessageWorker.perform_async(data['content'])
  end
end
