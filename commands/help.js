module.exports = (message, prefix) => {
  message.channel.send(`
SongBirb, made by <@!544169448890826757>, <@!495942812542697472> and <@!538557982955536410>
Current prefix: ${prefix}
\`\`\`
${prefix}help      -- Display this message.
${prefix}leave     -- Leave the voice chat.
${prefix}summon    -- Summon SongBirb to your VC.
${prefix}ping      -- Check if the bot is up.
${prefix}prefix    -- Change or check the prefix of the server.\
${prefix}volume    -- Change the volume of the bot.
#{prefix}tracklist -- Change the tracklist the bot uses.
  \`\`\``);
};
