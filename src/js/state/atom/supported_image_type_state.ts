import { atom, selector } from "recoil";
import { SampleImageType } from "@src/js/type/entity";

const _selector = selector({
    key: 'supportedImageTypeSelector',
    get: async ({ get }) => {
        return await getSupportedImageType()
    }
})

export const supportedImageTypeState = atom<SampleImageType>({
    key: 'supportedImageType',
    default: _selector
})

async function detectWebpSupport() {

    const testImageSources = [
        "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
        "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
    ]

    const testImage = (src) => {
        return new Promise((resolve, reject) => {
            var img = document.createElement("img")
            img.onerror = error => resolve(false)
            img.onload = () => resolve(true)
            img.src = src
        })
    }

    const results = await Promise.all(testImageSources.map(testImage))

    return results.every(result => !!result)
}

async function detectJ2kSupport() {
    const testImageSources = [
        'data:image/jp2;base64,AAAADGpQICANCocKAAAAFGZ0eXBqcDIgAAAAAGpwMiAAAAAtanAyaAAAABZpaGRyAAAABAAAAAQAAw8HAAAAAAAPY29scgEAAAAAABAAAABpanAyY/9P/1EALwAAAAAABAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAw8BAQ8BAQ8BAf9SAAwAAAABAQAEBAAB/1wABECA/5AACgAAAAAAGAAB/5PP/BAQFABcr4CA/9k='
    ]

    const testImage = (src) => {
        return new Promise((resolve, reject) => {
            var img = document.createElement("img")
            img.onerror = error => resolve(false)
            img.onload = () => resolve(true)
            img.src = src
        })
    }

    const results = await Promise.all(testImageSources.map(testImage))

    return results.every(result => !!result)
}


async function getSupportedImageType(): Promise<SampleImageType> {
    if (await detectWebpSupport()) {
        return "webp"
    }
    if (await detectJ2kSupport()) {
        return "jp2"
    }
    return "jpg"
}