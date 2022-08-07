import { PackageId, SampleImageType, SamplePackageZipped } from "./entity"
import { SampleLayers } from "./sample_overlay"
import { SampleExtraImages } from "./sample_extra_image"

export type RetrieveSample = (id: PackageId, format: SampleImageType) => Promise<SamplePackageZipped>
export type RetrieveLayers = (id: PackageId) => Promise<SampleLayers | null>
export type RetrieveExtraImages = (id: PackageId) => Promise<SampleExtraImages | null>
export type QueryLastModified = (id: PackageId, format: SampleImageType) => Promise<[string, boolean]>
