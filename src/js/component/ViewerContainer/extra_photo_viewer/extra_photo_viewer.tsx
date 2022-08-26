import React, { useEffect } from "react"
import { useRecoilValue, useRecoilState } from "recoil"
import { Swipe } from "@src/js/component/common/swipeable-viewer"
import { sampleExtraImagesState } from "@src/js/state/atom/sample_extra_images_state"
import styles from "./index.module.css"
import { selectedSampleListItemState } from "@src/js/state/atom/selected_sample_list_item_state";
import { sampleExtraViewerStatusState } from "@src/js/state/atom/sample_extra_viewer_status_state"
import { ExtraImagesKey, ExtraImageKey } from "@src/js/type/sample_extra_image"
import useLang from "@src/js/hooks/use_lang"
import { withFallbackLanguage } from "@src/js/util/language_util"
import { SampleListItemKeys } from "@src/js/type/sample"

type Props = {}

export const ExtraPhotoViewer: React.FC<Props> = ({ }) => {
  const [lang, _] = useLang()
  const sample = useRecoilValue(selectedSampleListItemState)
  const sample_id = sample[SampleListItemKeys.PackageName]
  const extraImages = useRecoilValue(sampleExtraImagesState)
  const [isActive, setIsActive] = useRecoilState(sampleExtraViewerStatusState)
  const className = isActive ? styles.extraPhotoContainer + " " + styles.active : styles.extraPhotoContainer

  useEffect(() => {
    setIsActive(false)
  }, [sample])

  return <>
    {extraImages ?
      (<div className={className} key={sample_id}>
        <Swipe>
          {extraImages[ExtraImagesKey.ExtraImages].map((image, i, a) => genItem(image, i, a.length, lang))}
        </Swipe>
      </div >)
      : <></>
    }
  </>
}

function genItem(image, index, total, lang) {
  const desc = withFallbackLanguage(image[ExtraImageKey.Description], lang)
  return <div key={index} className={styles.item}>
    <div className={styles.photoWrapper}>
      <img src={image[ExtraImageKey.ImagePath]} className={styles.photo}></img>
    </div>
    <div className={styles.description}>{desc}</div>
    {total > 1 ? <div>{index + 1}/{total}</div> : <></>}
  </div>
}
