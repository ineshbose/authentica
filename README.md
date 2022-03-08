# Authentica

Authentica is a service that allows signing online public documents using a key system and [Shields.io](https://shields.io). This project was created for the Human Centred Security (M) coursework.

## Getting Started

### Prerequisites

#### Cloning this Repository

To clone this repository, you need to have [Git](https://git-scm.com/) installed, however you can also download a [ZIP](https://github.com/ineshbose/authentica/archive/master.zip) instead.

```sh
git clone https://github.com/ineshbose/authentica.git
cd authentica
```

#### Node.js & NPM/Yarn

This project uses Node.js frameworks, and in order to run those, you need to have [Node.js](https://nodejs.org/en/download/) installed which will include `npm`. Furthermore, it is **strongly recommended** to install [Yarn](https://classic.yarnpkg.com/lang/en/); issues with `npm` are not to blamed here.

```sh
npm install --global yarn
# Make sure npm bin is in your PATH, eg (C:\User\...\AppData\Roaming\npm)
```

### Running the App

#### Database Setup

```sh
yarn prisma migrate # dev
# npx prisma migrate
```

#### Application

```sh
yarn dev
# npm run dev
```

#### `launch.json` (convenient option)*

```json
{
    "configurations": [
        {
            "name": "Authentica",
            "type": "node",
            "request": "launch",
            "runtimeExecutable": "yarn",
            "cwd": "${workspaceFolder}",
            "console": "integratedTerminal",
            "runtimeArgs": [
                "dev"
            ],
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```

### Dev References

* [`benawad/jwt-auth-example`](https://github.com/benawad/jwt-auth-example)
* [`prisma/awesome-links`](https://github.com/prisma/awesome-links)
* [`prisma/prisma-examples`](https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nextjs)
* [`sumitkolhe/krates`](https://github.com/sumitkolhe/krates)

## Developed With

* [Next.js](https://nextjs.org/)
* [Prisma](https://www.prisma.io/)
* [GraphQL](https://graphql.org/)
* [Geist UI](https://geist-ui.dev/)
* [TailwindCSS](https://tailwindcss.com/)

## Team Members

* Anna Berry
* Hector Jones
* Inesh Bose
* Marc Auf der Heyde
* Stephen Connolly
