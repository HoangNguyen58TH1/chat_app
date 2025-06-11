class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.create(message_params)
    ActionCable.server.broadcast("chat_channel", {
      content: @message.content
    })
    WebNotificationsChannel.broadcast_to(
      # current_user,
      "notification_channel",
      title: "New things!",
      body: "All the news fit to print"
    )
    head :ok
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
