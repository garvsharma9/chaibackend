require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

const data = {
  "login": "garvsharma9",
  "id": 185364681,
  "node_id": "U_kgDOCwxwyQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/185364681?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/garvsharma9",
  "html_url": "https://github.com/garvsharma9",
  "followers_url": "https://api.github.com/users/garvsharma9/followers",
  "following_url": "https://api.github.com/users/garvsharma9/following{/other_user}",
  "gists_url": "https://api.github.com/users/garvsharma9/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/garvsharma9/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/garvsharma9/subscriptions",
  "organizations_url": "https://api.github.com/users/garvsharma9/orgs",
  "repos_url": "https://api.github.com/users/garvsharma9/repos",
  "events_url": "https://api.github.com/users/garvsharma9/events{/privacy}",
  "received_events_url": "https://api.github.com/users/garvsharma9/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-10-17T11:36:32Z",
  "updated_at": "2026-07-30T11:18:16Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) =>{
    res.send("hiteshdotcom")
})


app.get('/github', (req, res) =>{
  res.json(data);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});



module.exports = app