# @APP_NAME@

An instance of the [microscope_simulator](https://github.com/Fumipo-Theta/microscope_simulator)

## Development

- install dependency
  - `yarn install`
- build for deploy
  - `yarn build:prod`
- update core dependency (if needed)
  - `yarn update:core`: update to latest release branch of the microscope_simulator
  - `yarn update:core <git ref>`: update to specified branch, tag, or commit of the microscope_simulator ex. `origin/master` or `2.3.0`
- Launch local server with building for local environment
  - `yarn start`

### Customize resources

- Edit files in [/vender](/vender)
