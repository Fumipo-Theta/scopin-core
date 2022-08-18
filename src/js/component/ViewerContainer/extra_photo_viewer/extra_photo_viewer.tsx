import React from "react"
import { useRecoilValue } from "recoil"
import { Swipe } from "@src/js/component/common/swipeable-viewer"
import { sampleExtraImagesState } from "@src/js/state/atom/sample_extra_images_state"
import styles from "./index.module.css"
import { sampleExtraViewerStatusState } from "@src/js/state/atom/sample_extra_viewer_status_state"
import { ExtraImagesKey, ExtraImageKey } from "@src/js/type/sample_extra_image"
import useLang from "@src/js/hooks/use_lang"
import { withFallbackLanguage } from "@src/js/util/language_util"

type Props = {}

export const ExtraPhotoViewer: React.FC<Props> = ({ }) => {
  const [lang, _] = useLang()
  const extraImages = useRecoilValue(sampleExtraImagesState)
  const isActive = useRecoilValue(sampleExtraViewerStatusState)
  const className = isActive ? styles.extraPhotoContainer + " " + styles.active : styles.extraPhotoContainer

  return <>
    {extraImages ?
      (<div className={className}>
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
