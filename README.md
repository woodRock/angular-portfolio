# woodrock.github.io
![Build](https://github.com/woodRock/woodRock.github.io/workflows/Build/badge.svg)
![Lint](https://github.com/woodRock/woodRock.github.io/workflows/Lint/badge.svg)
![Deploy](https://github.com/woodRock/woodRock.github.io/workflows/Deploy/badge.svg)

## Description
This is a portfolio of my work. Made using AngularTS and Firebase.

## Database
The content for this site is remotely hosted using Firebase. CRUD operations on all content withouth having to push a new build.

## Continious Integration
This website uses github actions to provide CI. In order for a commit to pass it must achieve the following:
1. build with npm
2. pass all npm tests
