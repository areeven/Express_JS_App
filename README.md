# Express App

Creator - Emilie Öst & Mattias Andersson

<details>
<summary>Introduction</summary>

`node -v`
= v16.14.0

create dir - backend/src

create [Server.js](./backend/src/Server.js)

`cd backend`

`npm i express winston morgan cors dotenv mongoose helmet body-parser`

For testing
`npm i -D mocha chai chai-http` (dev-dependencies)

For running
`npm i -D nodemon`

Adding to package.json
`"type": "module",`
as well as
`"start": "node .",`
changing test to
`"test": "mocha 'src/test/**'"`

</details>

<details>
<summary>First Test</summary>

Testing so that our alive call is working

create dir test

create [Alive.test.js](./backend/src/test/Alive.test.js)

npm run test 1 passing test according to above test

</details>

<details>
<summary>Planering</summary>
Chat-webapp 
- it will also be a mobile application in the future

NAME:

---

## Figma

Colors:\
{`--main-dark-blue: #45475C`},\
{`--main-light-blue: #8389A0`},\
{`--main-chat-blue: 4D538B`}

![mobile](images/figma-wireframe.png 'mobile with figma')

</details>