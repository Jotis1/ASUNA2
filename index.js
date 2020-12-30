const Discord = require("discord.js")
const client = new Discord.Client()
const randomPuppy = require("random-puppy")
let prefix = "as!" /// EL PREFIX DE TU BOT

client.on("ready", () => {

    console.log("Ohayou!") /// Mensaje que enviara el bot a la consola cuando el bot se prenda.
    client.user.setPresence({
        status: "online",
        activity: {
            name: "Sword Art Online",
            type: "PLAYING"

        }
    })

})


client.on("message", async (message) => {

    if (!message.content.startsWith(prefix)) return;



    const args = message.content.slice(prefix.length).trim().split(/ + /g) /// Aquí definimos que los argumentos

    /// vienen despues del prefijo

    const command = args.shift().toLowerCase() /// Aquí definimos que el "command" es el comando que el usuario ingreso
})


client.on("message", async (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()


    if (command === "say"){

        let texto = args.join(" ")
        if (!texto) return message.channel.send("**Ingresa Un Texto**").then(msg => msg.delete({timeout: 5000}))
        message.delete().catch() 
        message.channel.send(texto)
    }

    if (command === "meme"){
        const meme = ["meme"]
        const random = meme[Math.floor(Math.random() * meme.length)]          

        const img = await randomPuppy(random)
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter(message.guild.name, message.guild.iconURL())
        .setImage(img) 
        .setTitle("**Meme:**")
        .setDescription("**Categoría:**" + random)
        message.channel.send(embed) 
    }
    
    if (command === "hi"){ 
            message.channel.send(`Ohayou! :two_hearts: `) 
    }

    if (command === "yt"){ 
        message.channel.send(`:crossed_flags:  El canal de VictoRuch es este! Échale un vistazo  :crossed_flags: : https://www.youtube.com/channel/UC5weJ8jqHA3qyc1mI3vC8-w `) 
    }

    if (command === "twitch"){ 
        message.channel.send(`:crossed_flags:  ¿El Twitch de VictoRuch? ¡¡ Aquí lo tienes!!  :crossed_flags: : https://www.twitch.tv/victoruchh`) 
    }
    
    if (command === "normas"){ 
        message.channel.send(`〖:ribbon:〗 NORMAS DEL SERVER 〖:gift:〗
        :one: •Respetar al resto de miembros del servidor
        :two: •No flood y spam en el servidor
        :three: •Respetar las funcionalidades de los canales
        :five: •No pongas comandos en exceso, mencionar moderadamente y no utilizar el @ everyone
        :six: •No hacerte pasar por otra persona
        :seven: •Prohibido hablar de temas polemicos
        :eight: •Solo poner imagenes en las salas correspondientes y que sean legales y utilizar los Bots en sus respectivas salas
        :nine: •No poner links
        :keycap_ten: •Lo mas importante, pasartelo bien y disfrutar del servidor!`) 
    }

    

})




client.login(process.env.TOKEN);