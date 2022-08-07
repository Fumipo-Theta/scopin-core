import React, {useEffect, useRef} from "react"
import { useRecoilValue } from "recoil"
import { NicolToggler } from "./nicol_toggler/nicol_toggler"
import { Viewer } from "./viewer/viewer"
import { SampleScale } from "./sample_scale/sample_scale"
import { Welcome } from "@src/js/component/welcome/welcome"
import { windowInnerSizeState } from "@src/js/state/atom/window_inner_size_state"
import { samplePackageState } from "@src/js/state/atom/sample_package_state"
import { sampleLayersState } from "@src/js/state/atom/sample_layers_state"
import { systemLanguageState } from "@src/js/state/atom/system_language_state"
import { sampleOverLayMapState } from "@src/js/state/atom/sample_overlay_map_state"
import { SamplePackage, Manifest, Language } from "@src/js/type/entity"
import { withFallbackLanguage } from "@src/js/util/language_util"
import { AnnotationContent } from "@src/js/component/ViewerContainer/viewer/layer/annotation/annotation"
import { ExtraPhotoViewer } from "./extra_photo_viewer/extra_photo_viewer"
import styles from "./index.module.css"
import { LayersTogglerButton } from "@src/js/component/ViewerContainer/layers_toggler/layers_toggler_button"
import { sampleLayersStatusState } from "@src/js/state/atom/sample_layers_status_state"
import { ExtraPhotoViewerTogglerButton } from "./extra_photo_viewer_toggler/extra_photo_viewer_toggler_button"
import { IViewerContainerMessage, IWelcomeMessage } from "@src/js/type/message"

type DescriptionProps = {
    sample: SamplePackage
}

const RockType: React.FC<{ manifest: Manifest, lang: Language }> = ({ manifest, lang }) => {
    return <span>{withFallbackLanguage(manifest.rock_type, lang, "en")}</span>
}
const SampleLocation: React.FC<{ manifest: Manifest, lang: Language }> = ({ manifest, lang }) => {
    return <span>{withFallbackLanguage(manifest.location, lang, "en")}</span>
}
const Description: React.FC<{ manifest: Manifest, lang: Language }> = ({ manifest, lang }) => {
    const ref = useRef<HTMLDivElement>(null)
    const description = manifest.hasOwnProperty("description")
        ? manifest.description
        : manifest.hasOwnProperty("discription") // There are some miss-spelled packages...
            ? manifest.discription
            : {}
    const content = withFallbackLanguage(description, lang, "en")
    useEffect(() => {
        if (ref) {
            ref.current.innerHTML = content || ""
        }
    }, [content])
    return <div ref={ref}></div>
}

const Owner: React.FC<{ manifest: Manifest, lang: Language }> = ({ manifest, lang }) => {
    if (!manifest.hasOwnProperty("owner")) return <></>

    const owner = typeof (manifest.owner) === 'string'
        ? manifest.owner
        : withFallbackLanguage(manifest.owner, lang, "en")
    return <p>
        {owner}
    </p>
}

const DescriptionContainer: React.FC<DescriptionProps> = ({ sample }) => {
    const manifest: Manifest = sample.manifest // TODO: replace function take manifest and return SampleMeta
    const lang = useRecoilValue(systemLanguageState)
    return (
        <div className={styles.descriptionContainer}>
            <p>
                <RockType manifest={manifest} lang={lang} />
                {" "}
                <SampleLocation manifest={manifest} lang={lang} />
            </p>
            <Description manifest={manifest} lang={lang} />
            <Owner manifest={manifest} lang={lang} />
        </div>
    )
}

type Props = {
    AppLogo: React.FC,
    message: IViewerContainerMessage,
    welcomeMessage: IWelcomeMessage,
}

export const ViewerContainer: React.FC<Props> = ({ AppLogo, message, welcomeMessage }) => {
    const currentSample = useRecoilValue(samplePackageState)
    const currentLayers = useRecoilValue(sampleLayersState)
    useRecoilValue(sampleOverLayMapState)
    const mainLayerProps = {
        ...useRecoilValue(windowInnerSizeState),
        sample: currentSample,
        layers: useRecoilValue(sampleLayersStatusState) ? currentLayers : null,
    }
    return (
        <>
            {currentSample ?
                <>
                    <div className={styles.viewerLayerContainer}>
                        <Viewer {...mainLayerProps} />
                        <SampleScale />
                        <div className={styles.buttonsWrapper}>
                            <ExtraPhotoViewerTogglerButton />
                            <NicolToggler />
                            <LayersTogglerButton />
                        </div>
                    </div>
                    <AnnotationContent />
                    <ExtraPhotoViewer />
                    <DescriptionContainer sample={currentSample} />
                </> :
                <Welcome AppLogo={AppLogo} message={welcomeMessage} />
            }
        </>
    )
}
