import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { LayersIcon } from "../../misc/icons/layers_icon";
import styles from "./index.module.css"
import { sampleLayersStatusState } from "@src/js/state/atom/sample_layers_status_state";
import { sampleLayersState } from "@src/js/state/atom/sample_layers_state";
import { useShowLayersFlag } from "@src/js/hooks/location_hooks";
import { AnnotationContentState, AnnotationActiveKeyState } from "@src/js/state/atom/annotation_content_state"
export const LayersTogglerButton: React.FC = () => {
    const [buttonState, setButtonState] = useRecoilState(sampleLayersStatusState)
    const setAnnotationContent = useSetRecoilState(AnnotationContentState)
    const [_, setActiveAnnotation] = useRecoilState(AnnotationActiveKeyState)
    const showLayer = useShowLayersFlag()
    const sampleLayer = useRecoilValue(sampleLayersState)
    const onClick = useCallback((_e) => {
        setButtonState(current => !current)
        if (buttonState) {
            setAnnotationContent(null)
            setActiveAnnotation(null)
        }
    }, [setButtonState, buttonState])

    const layerIsDisabled = (!showLayer) || !sampleLayer
    return (<>
        {
            layerIsDisabled
                ? <div></div>
                : <button className={`${styles.button} ${buttonState ? styles.active : ""}`} onClick={onClick}>
                    <LayersIcon isActive={buttonState} />
                </button>
        }
    </>)
}
