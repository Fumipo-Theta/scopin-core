import { atom, selector } from "recoil"
import { retrieveSampleExtraImagesJson } from "@src/js/remote_repo/static/package_repo"
import { SampleListItemKeys } from "@src/js/type/sample"
import { SampleExtraImages } from "@src/js/type/sample_extra_image"

import { selectedSampleListItemState } from "./selected_sample_list_item_state"

export const sampleExtraImagesSelector = selector<SampleExtraImages>({
  key: 'SampleExtraImagesSelector',
  get: async ({get}) => {
    const currentSampleListItem = get(selectedSampleListItemState)
        const currentSampleId = currentSampleListItem?.[SampleListItemKeys.PackageName] || ''
        if (currentSampleId != '') {
            try {
                return await retrieveSampleExtraImagesJson(currentSampleId)
            } catch {
                console.log(`[sampleExtraImagesSelector] Failed to fetch sample extra images by id: ${currentSampleId}`)
                return null
            }
        } else {
            return null
        }
  }
})

export const sampleExtraImagesState = atom<SampleExtraImages>({
    key: 'sampleExtraImages',
    default: sampleExtraImagesSelector
})
