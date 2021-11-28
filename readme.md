# SCOPin rock: Polarizing microscope simulator

![SCOPin rock logo](./src/images/official_logo.png)

This Web application simulates polarizing microscope view of the thin section of rock samples.

Example of the implementation is [scopin-rock](https://github.com/Fumipo-Theta/scopin-rock),
and the deployed web application is [here](https://microscope.fumipo-theta.com).

## Application

The web browser corresponding to ES6 is required. Please view by the latest version Google Chrome, Safari, Firefox, or Microsoft Edge.

*Internet Explorer does not correspond*.

## Usage of the app

### Gesture to operate the view

1. Touch
    * Rotate by swipe
    * Change magnification by pinch in/out
2. Mouse or touchpad
    * Rotate by drag
    * Change magnification by scroll

### Change mode of the microscope

Switch open Nicol and crossed Nicols by a toggle button.

## For development of your own app

See details in [this document](/docs/how_to_release_your_app.md). (Japanese only. English T.B.D.)
See [scopin-rock](https://github.com/Fumipo-Theta/scopin-rock) as an example of application.

![](/docs/images/direcotry_structures.png)

### Pre-requirements

* install git
* install Node.js
  * ver. 16.0 or later is recommended.
* install yarn v1

### Create a new project

- `yarn install`
  - install dependencies of the core functions
- `yarn new <your app name>`
  - then a directory whose name is `<your app name>` will be created
- Then change the current directory to `<your app name>`

### Install dependencies for app

```console
yarn install
```

### Build your app

- For production mode
  ```console
  yarn build:prod
  ```
  - JavaScript is minified
- For developing mode
  ```console
  yarn build
  ```
  - Source map is available

The build products are output under the `release/` directory.
The entry point of the application is `release/index.html`.

#### configuration

You can configure the app by environmental variable `CONFIG_JSON`, which is JSON string.
When the variable is not set, [`config.example.json`](./config.example.json) is loaded as default.

Now you can set:

- `package_endpoint`: indicates path or url to the image packages repository

Windows (PowerShell)

```sh
$env:CONFIG_JSON='{"package_endpoint": "path/to/example_image_package_root"}'; yarn build

$env:CONFIG_JSON=cat your_config.json; yarn build
```

Mac/Linux

```sh
CONFIG_JSON='{"package_endpoint": "path/to/example_image_package_root"}' yarn build

CONFIG_JSON=$(cat your_config.json) yarn build
```

### Customize some component

- Edit files in `<your app name>/vender/`
  - Rebuild your app after the edit

### Launch dev server

```console
yarn start

# with loading custom your config.json

CONFIG_JSON=$(cat your_config.json) yarn start
```

Then access to http://localhost:8080/ .
If you use Google Chrome, and testing with fetching image packages from remote server, please access via http://lvh.me:8080/ to avoid CORS problem.

### Prepare thin-section image package

Procedure to preparation is documented [here](/docs/how_to_prepare_sample_images.md) (now only in Japanese).
After preparation, you should locate them somewhere and configure the application setting.
The example is available in [example_image_package_root](./example_image_package_root) directory.
