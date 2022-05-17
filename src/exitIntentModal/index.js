import { InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import {
	ToggleControl,
	Panel,
	PanelRow,
	PanelBody,
} from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";

import "./firstModal";
import "./secondModal";

registerBlockType("abhinash/exit-intent-modals", {
	title: "ASAG Exit Intent Modals",
	category: "asag-blocks",
	keywords: ["dialog", "exit", "box", "block", "modal"],
	attributes: {
		isEnabled: { type: "boolean" },
	},
	edit({ attributes, setAttributes }) {
		return (
			<div>
				<InspectorControls>
					<Panel title="Modal Settings">
						<PanelBody title="Options" icon="admin-settings" initialOpen={true}>
							<PanelRow>
								<ToggleControl
									checked={attributes.isEnabled}
									onChange={() =>
										setAttributes({ isEnabled: !attributes.isEnabled })
									}
									label="Is Active?"
								/>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<div>
					<InnerBlocks
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
						placeholder="Insert modals"
						allowedBlocks={[
							"abhinash/exit-intent-first-modal",
							"abhinash/exit-intent-second-modal",
						]}
					></InnerBlocks>
				</div>
			</div>
		);
	},
	save({ attributes }) {
		return (
			attributes.isEnabled && (
				<div x-data="exitIntent()" x-init="()=>{initExitIntent()}">
					<InnerBlocks.Content />
				</div>
			)
		);
	},
});
