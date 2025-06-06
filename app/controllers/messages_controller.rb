class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.create(message_params)
    ActionCable.server.broadcast("chat_channel", {
      content: @message.content
    })
    head :ok
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
