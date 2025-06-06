#
1. bin/dev
2. Procfile.dev
--> "rails server" and "yarn build --watch"
3. When have any browser access localhost:3000, it is open a WebSocket connection to ws://127.0.0.1:3000/cable (by Action Cable (Rails built-in WebSocket framework))
--> loading and using multi JS files

4. create
- call api create with new message
- [ActionCable] Broadcasting to chat_channel: {:content=>"toni"}
+ multiple browser will be receive message from channel 'chat_channel'
+ because browser nào access localhost:3000 thì đã mở ws://127.0.0.1:3000/cable
