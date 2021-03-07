@client.event
async def on_message(message):
  with open('users.json', 'r') as f:
    users = json.load(f)

    await update_data(users, member)



  with open("users.json", 'w') as f:
    json.dump(users, f)
@client.event
async def on_message(message):
  author = message.author

  with open('users.json', 'r') as f:
    users = json.load(f)

    await update_data(users, author)
    await add_experience(users, author, 5)
    await level_up(users, author, message.channel)
  with open("users.json", 'w') as f:
    json.dump(users, f)


  if message.content.startswith("&stats"):
    global Pxp
    global KA
    Pxp = 0
    KA = 0
    await message.channel.send("XP: " + str(Pxp) + ". Enemy Tanks Killed: " + str(KA) + ".")
  if message.content.startswith('&start'):
    await message.channel.send('Choose vehicle: VT-4, M1 Abrams, T-18 Armata. 1, 2, 3.')
