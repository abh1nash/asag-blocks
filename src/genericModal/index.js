import { InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import { Panel, PanelRow, PanelBody, TextControl } from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("abhinash/generic-modal", {
	title: "ASAG Generic Modal",
	category: "asag-blocks",
	keywords: ["dialog", "free", "box", "block", "modal"],
	attributes: {
		triggeredBy: { type: "string" },
	},
	edit({ attributes, setAttributes }) {
		return (
			<div>
				<InspectorControls>
					<Panel title="Modal Settings">
						<PanelBody title="Options" icon="admin-settings" initialOpen={true}>
							<PanelRow>
								<TextControl
									label="Triggered by"
									value={attributes.triggeredBy}
									onChange={(value) => setAttributes({ triggeredBy: value })}
								></TextControl>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<InnerBlocks placeholder="Modal Content"></InnerBlocks>
			</div>
		);
	},
	save({ attributes }) {
		return (
			<div
				className="generic-modal modal  fade"
				tabindex="-1"
				role="dialog"
				aria-hidden="true"
				data-triggered-by={attributes.triggeredBy}
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		);
	},
});
