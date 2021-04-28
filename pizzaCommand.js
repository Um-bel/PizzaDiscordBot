module.exports = {
    name: 'pizza', 
    desc: 'will order some pizza', 
    async execute(client, message, args, cmd, Discord) {
        //getting the info from the user: 
        if(message.channel.type !== 'dm') return message.channel.send('please only use this command in a dm for privacy'); 
        x = 60000; 

        const leagalEmbed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Do you consent to us to using your address for conventional purposes?')
        .setDescription('we **will not** use your address or other personal information for **any** malicious intent')
        .setFooter('message: "yes" or "no"'); 
        message.channel.send(leagalEmbed); 
        let YorN = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]});

        if(YorN.first().content === 'yes') {
            message.channel.send("great!"); 
        } else if (YorN.first().content === 'no') {
            return message.channel.send('okay! if you ever want to try again, just message "yes" next time.'); 
        } else {
            return; 
        }

        const postalEmbed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setTitle('Great! first, please enter your postal code.')
        .setDescription('Ex: message, "98101"'); 
        message.channel.send(postalEmbed); 
        let postalCode = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]});

        const addEmbed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setTitle('Next, please enter your street address')
        .setDescription('Ex: 123 Sesame street Dr NE'); 
        message.channel.send(addEmbed); 
        let streetAddress = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]}); 

        const nameEmbed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Please enter your first name')
        .setDescription('Ex: if your name is "John Doe", enter "John"'); 
        message.channel.send(nameEmbed); 
        let firstName = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]}); 
        message.channel.send('and last name please'); 
        let lastName = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]});

        const emailEmbed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('Please enter your email')
        .setDescription('Ex: johndoe@gmail.com'); 
        message.channel.send(emailEmbed); 
        let usersEmail = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]}); 

        const phoneEmbed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle("lastly, please enter your phone number")
        .setDescription('Ex: (420) 420-6969'); 
        message.channel.send(phoneEmbed); 
        let phoneNumber = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]}); 

        

        const postal = postalCode.first().content;
        const address = streetAddress.first().content;
        const first = firstName.first().content; 
        const last = lastName.first().content; 
        const email = usersEmail.first().content; 
        const phone = phoneNumber.first().content;


        const checkEmbed = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle('is this information correct? ')
        .setDescription('yes or no, if you say yes. the pizza will be ordred.')
        .addFields(
            {name: 'address:', value: address}, 
            {name: 'postal code:', value: postal}, 
            {name: 'name:', value: `${first} ${last}`}, 
            {name: 'email:', value: email}, 
            {name: 'phone:', value: phone}
        ); 
        message.channel.send(checkEmbed); 
        let YorN2 = await message.channel.awaitMessages(u2 => u2.author.id === message.author.id, { time: x*30, max: 1, errors: ["time"]});

        if(YorN2.first().content === 'yes') {
            message.channel.send("a-Mai-zing!"); 
        } else if (YorN2.first().content === 'no') {
            return message.channel.send('okay, just restart by saying ">pizza" again'); 
        } else {
            return; 
        }

        const puppeteer = require('puppeteer');
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()


        await page.goto('https://www.dominos.com/en/pages/order/#!/locations/search/?type=Delivery')
    await console.log('opening the tab, wait 5 seconds');
    await page.waitForTimeout(5000);


    await page.type('input[id="Street"]', address); //123 Sesame street Dr NE
    await page.type('input[id="Postal_Code_Sep"]', postal); //12345
    await page.keyboard.press('Enter');
    await console.log('entering location, wait 5');
    await page.waitForTimeout(5000);

//adding products to cart: 
    await page.click('h2[data-quid="entree-title-bread"]');
    await console.log('entering the bread tab, another 5');
    await page.waitForTimeout(7000);
    await page.click('a[data-quid="F_PARMT-title"]');
    await console.log('selecting parm bread, you get the idea by now');
    await page.waitForTimeout(5000);
    await page.click('button[class="btn"]');
    await console.log('adding parm bead to cart');
    await page.waitForTimeout(5000);
    await page.click('a[href="#!/product/F_PBITES/builder/"]');
    await page.waitForTimeout(3000);
    await page.click('button[class="btn"]');
    await console.log('adding parm bites to cart');

//checkout: 
    await page.waitForTimeout(5000);
    await page.click('a[href="#!/checkout/"]');
    await console.log('going to checkout');
    await page.waitForTimeout(5000);
    await page.click('a[data-quid="overlay-no-thanks"]');
    await console.log('regecting further payments');
    await page.waitForTimeout(5000);
    await page.click('a[href="/en/pages/order/payment"]');
    await console.log('going to payment');
    await page.waitForTimeout(5000);
    await page.click('button[class="contactless-payment-instructions__cta"]');
    await console.log('making contactless payment');
    await page.waitForTimeout(5000);
    await page.click('input[data-quid="payment-cash"]');
    await page.type('input[id="First_Name"]', first);
    await page.type('input[id="Last_Name"', last);
    await page.type('input[id="Email"]', email); //johndoe@gmail.com
    await page.type('input[id="Callback_Phone"]', phone); //(123) 456 7890
    await page.click('button[data-quid="payment-order-now"]');
    await console.log('placing order');
    }
}
