<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=REST-API-DISCORD&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient"/> </a> 
</p>

<div align="center">
  
  ![GitHub release (latest by date)](https://img.shields.io/github/v/release/MGalaCyber/REST_API-NodExCord?style=for-the-badge)
  ![Discord](https://img.shields.io/discord/826406117658853417?logo=discord&style=for-the-badge)
  ![GitHub top language](https://img.shields.io/github/languages/top/MGalaCyber/REST_API-NodExCord?logo=javascript&style=for-the-badge)
  ![GitHub forks](https://img.shields.io/github/forks/MGalaCyber/REST_API-NodExCord?logo=github&style=for-the-badge)
  ![GitHub contributors](https://img.shields.io/github/contributors/MGalaCyber/REST_API-NodExCord?logo=github&style=for-the-badge)
  ![GitHub issues](https://img.shields.io/github/issues/MGalaCyber/REST_API-NodExCord?logo=github&style=for-the-badge)
  ![GitHub pull requests](https://img.shields.io/github/issues-pr/MGalaCyber/REST_API-NodExCord?logo=github&style=for-the-badge)
  ![Watching](https://img.shields.io/github/watchers/MGalaCyber/REST_API-NodExCord?style=for-the-badge)
  ![Stars](https://img.shields.io/github/stars/MGalaCyber/REST_API-NodExCord?style=for-the-badge)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MGalaCyber/REST_API-NodExCord?style=for-the-badge)
  
</div>

<div align="center">

[![DeepSource](https://deepsource.io/gh/MGalaCyber/REST_API-NodExCord.svg/?label=active+issues&show_trend=true&token=vmwTEHQFGMlG6rjbmPBk-COL)](https://deepsource.io/gh/MGalaCyber/REST_API-NodExCord/?ref=repository-badge)

</div>

----------

<p align="center"> 
  <a href="https://discord.gg/VzGNhtmmfB" target="_blank"> <img src="https://discordapp.com/api/guilds/826406117658853417/widget.png?style=banner2"/> </a> 
</p>

<p align="center"> 
  <a href="https://ko-fi.com/galaxd1274" target="_blank"> <img src="https://ko-fi.com/img/githubbutton_sm.svg"/> </a>
</p>

----------

## 📑 Feature
- [x] Rest API
- [ ] Api Key Generator
- [ ] Api Key Validator
- [x] Login using Discord Oauth2
- [x] User Authorized Check
- [x] Easy to use

## 📌 Note
If you want REST API handler template with API Key Generator, you can get [HERE](https://github.com/MGalaCyber/REST_API-NodExCord/tree/master)

## 📎 Requirements

- [x] Node.JS v17+ or higher **[Download](https://nodejs.org/en/download)**
- [x] Discord Bot Oauth2 **[Guide](https://discord.com/developers/docs/topics/oauth2)**
- [x] Embedded.JS **[Guide](https://ejs.co)**
- [x] Express.JS **[Guide](https://expressjs.com)**

## 📚 Installation

```
git clone -b basic https://github.com/MGalaCyber/REST_API-NodExCord
cd REST_API-NodExCord
npm install
```

## 📄 Configuration

- Rename `.env.example` to `.env` and fill out the values:

```env
### Express
PORT=
SECRET=Random_Number (Encrypted & Unique Code Number Recommended)

### Discord
SCOPE=["identify", "email"] (Default)
CLIENT_ID=Discord_Client_ID
CLIENT_SECRET=Discord_Client_Secret
CLIENT_CALLBACK=http://sitename.domain/auth/discord/callback

### Backend
MONGO_URI=You_MongoDB_Url
```
- Go to [Discord Developer Portal](https://discord.com/developers/applications), then go to your **Application** > **Oauth2** > **Redirects**. Copy url from `CLIENT_CALLBACK` and paste to `Redirects` and save.
- After installation or finishes all you can use `node .` to start the bot. or `Run Start.bat`

## 🔔 Notice!
Now for Decrypted version is Available on [Ko-Fi Shop](https://ko-fi.com/galaxd1274/shop). You can buy like Basic/Master version with Different Features. By buying my project products, you help me to keep motivated and passionate about developing other projects.

## 🔐 Licensed

Distributed under the `Apache 2.0 License`. See [`LICENSE`](https://github.com/MGalaCyber/REST_API-NodExCord/blob/basic/LICENSE) for more information.

## 💝 Support Me

- [PayPal](https://paypal.me/IBManggala)
- [Ko-Fi](https://ko-fi.com/galaxd1274)

## ❣ Contributors

<a href="https://github.com/MGalaCyber/REST_API-NodExCord/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=MGalaCyber/REST_API-NodExCord" />
</a>
