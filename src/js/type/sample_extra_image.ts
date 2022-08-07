import { I18nMap } from "./entity"

export enum ExtraImagesKey {
  ExtraImages = "extra_images",
}

export enum ExtraImageKey {
  ImagePath = "image_path",
  Description = "description",
}

export interface SampleExtraImages {
  [ExtraImagesKey.ExtraImages]: Array<SampleExtraImage>
}

export interface SampleExtraImage {
  [ExtraImageKey.ImagePath]: string,
  [ExtraImageKey.Description]: I18nMap<string>,
}

export function isValid(json: any): boolean {
  if (json?.[ExtraImagesKey.ExtraImages]?.length === 0) return false

  return true
}
