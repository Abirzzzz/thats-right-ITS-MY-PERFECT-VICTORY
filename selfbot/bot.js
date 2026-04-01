require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13')
const fs = require('fs')
const path = require('path')

const token = process.env.tokenherebrochacho;

if (!token) {
  console.error("either your token is fucking incorrect or, is not enteredin .env")
  process.exit(1)
}

const client = new Client({
  checkUpdate: false,
});

client.on("ready", () => {
  console.log(`working, info- ${client.user.username}#${client.user.discriminator}`)
})

client.on("messageCreate", async (message) => {
  if (message.author.id !== client.user.id) return
  if (!message.guild) return
  
  const content = message.content.trim().toLowerCase()

  if (content === "gr") {
    try {
      await message.delete().catch(() => {})
      await handleGetRoles(message)
    } catch (err) {
      console.error("gr command failed with errorr", err)
    }
    return
