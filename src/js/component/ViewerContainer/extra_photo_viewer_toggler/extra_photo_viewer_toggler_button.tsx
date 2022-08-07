import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "./index.module.css"
import { sampleExtraViewerStatusState } from "@src/js/state/atom/sample_extra_viewer_status_state";
import { LandScapeAndRockIcon } from "../../misc/icons/landscape_and_rock_icon";
import { sampleExtraImagesState } from "@src/js/state/atom/sample_extra_images_state";

export const ExtraPhotoViewerTogglerButton: React.FC = () => {
  const viewerIsDisabled = !useRecoilValue(sampleExtraImagesState)
  const [buttonState, setButtonState] = useRecoilState(sampleExtraViewerStatusState)
  const onClick = useCallback((_e) => {
        setButtonState(current => !current)
    }, [setButtonState])
  return (<>
    {
      viewerIsDisabled
        ? <div></div>
        : <button className={`${styles.button} ${buttonState ? styles.active : ""}`} onClick={onClick}>
                    <LandScapeAndRockIcon isActive={buttonState} />
          </button>
    }
  </>)
}
