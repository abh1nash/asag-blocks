const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	PanelRow,
	TextControl,
	ToggleControl,
	Button,
} from "@wordpress/components";
import shortid from "shortid";

registerBlockType("abhinash/video-section", {
	title: __("Video Section"),
	category: "asag-blocks",
	icon: "video-alt2",
	keywords: [__("video")],
	supports: {
		align: ["full"],
	},
	attributes: {
		videoUrl: { type: "string" },
		videoTitle: { type: "string" },
		videoId: { type: "string" },
		imageObj: { type: "object" },
		lazyLoad: { type: "boolean" },
	},
	edit({ attributes, setAttributes }) {
		if (!attributes.videoId) setAttributes({ videoId: shortid.generate() });
		const handleUpdateImg = (imgObj) => setAttributes({ imageObj: imgObj });
		return (
			<div>
				<InspectorControls>
					<Panel name="settings">
						<PanelBody
							initialOpen={true}
							icon="admin-settings"
							title="Video Settings"
						>
							<PanelRow>
								<MediaUploadCheck fallback="You do not have permissions to make changes to the media.">
									<MediaUpload
										title={__("Background image", "image-selector")}
										allowedTypes={["image"]}
										value={attributes.imageObj}
										onSelect={handleUpdateImg}
										render={({ open }) => (
											<Button
												className={
													"editor-post-featured-image__toggle image-selector-btn"
												}
												style={{
													backgroundImage:
														"linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('" +
														(attributes.imageObj
															? attributes.imageObj.url
															: "") +
														"')",
												}}
												onClick={open}
											>
												{__("Choose background image", "image-selector")}
											</Button>
										)}
									></MediaUpload>
								</MediaUploadCheck>
							</PanelRow>
							{attributes.imageObj && (
								<PanelRow>
									<Button onClick={() => handleUpdateImg(0)} isDestructive>
										Remove Image
									</Button>
								</PanelRow>
							)}

							<PanelRow>
								<TextControl
									value={attributes.videoTitle}
									onChange={(v) => {
										setAttributes({ videoTitle: v });
									}}
									label="Video Title"
								></TextControl>
							</PanelRow>

							<PanelRow>
								<TextControl
									value={attributes.videoUrl}
									onChange={(v) => {
										setAttributes({ videoUrl: v });
									}}
									label="Video Embed URL"
								></TextControl>
							</PanelRow>

							<PanelRow>
								<ToggleControl
									label="Lazy Load"
									checked={attributes.lazyLoad}
									onChange={(value) => {
										setAttributes({ lazyLoad: value });
									}}
								></ToggleControl>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<div className="py-4 text-center">
					<h2>{attributes.videoTitle}</h2>
				</div>
			</div>
		);
	},
	save({ attributes, className }) {
		const lazyLoadAttrs = attributes.lazyLoad
			? { "data-video": attributes.videoUrl }
			: {};
		return (
			<div
				className={
					className ? "video-initiator " + className : "video-initiator"
				}
				data-toggle="modal"
				data-target={"#" + attributes.videoId}
				style={{
					backgroundImage:
						"linear-gradient(#00000088, #00000088), url('" +
						attributes.imageObj.url +
						"')",
				}}
			>
				<div class="container text-center">
					<h3 class="text-light">{attributes.videoTitle}</h3>
					<i class="fas fa-play"></i>
				</div>
				<div
					class="modal fade bd-example-modal-lg"
					id={attributes.videoId}
					tabindex="-1"
					role="dialog"
					aria-hidden="true"
				>
					<div
						class="modal-dialog modal-dialog-centered modal-lg"
						role="document"
					>
						<div class="modal-content">
							<div class="modal-header">
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body" {...lazyLoadAttrs}>
								{!attributes.lazyLoad && (
									<iframe
										width="100%"
										height="315"
										src={attributes.videoUrl}
										frameborder="0"
										allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
										allowfullscreen
									></iframe>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
