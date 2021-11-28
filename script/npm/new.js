const fs = require("fs-extra")
const path = require("path")
const { execSync } = require("child_process")
const { exit } = require("process")

const usage = `
Usage:
(direct use)

    node new.js <your-app-name>

(via npm script)

    npm run new -- <your-app-name>
`

if (process.argv.length < 3) {
    console.log(usage)
    exit(1)
}

const [_node, _scriptPath, appName, ..._] = process.argv
const coreDir = path.resolve(__dirname, "../../")
const parentDir = path.resolve(coreDir, "../")
const appDir = path.resolve(parentDir, appName)

const repoUrl = "https://github.com/Fumipo-Theta/scopin-core.git"

console.log(`[info] Create your app project directory: [${appDir}]`)
fs.mkdirSync(appDir)

console.log(`[info] Copy app template`)
fs.mkdirSync(`${appDir}/docs`)
fs.mkdirSync(`${appDir}/test`)
fs.copySync(`${coreDir}/app_template`, appDir)
fs.copySync(`${coreDir}/example_image_package_root`, `${appDir}/example_image_package_root`)
fs.copySync(`${coreDir}/vender`, `${appDir}/vender`)
const basePackageJson = JSON.parse(fs.readFileSync(`${coreDir}/package.json`))
const packageJson = makePackageJson(basePackageJson, appName)
fs.writeFileSync(`${appDir}/package.json`, JSON.stringify(packageJson, null, 2))

console.log(`[info] Clone latest release of scopin-core into deps/`)
fs.mkdirSync(`${appDir}/deps`)
execSync(`git clone ${repoUrl} ${appDir}/deps/scopin-core`)
execSync('git checkout release', { cwd: `${appDir}/deps/scopin-core` })

function makePackageJson(base, appName) {
    const { new: _, ...scripts } = base.scripts
    const package = {
        name: appName,
        version: "0.1.0",
        description: "Instance of scopin-core",
        main: "/release/js/app.js",
        directories: {
            doc: "docs",
            test: "test"
        },
        scripts: scripts,
        repository: {},
        keywords: [],
        author: "",
        license: "",
        bugs: { url: "" },
        homepage: "",
        devDependencies: base.devDependencies,
        dependencies: base.dependencies,
    }

    return package
}

fs.copySync(`${appDir}/deps/scopin-core/src`, `${appDir}/_src`)