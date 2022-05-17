import { InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import { Panel, PanelRow, PanelBody, TextControl } from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("abhinash/exit-intent-second-modal", {
	title: "ASAG Exit Intent Second Modal",
	category: "asag-blocks",
	keywords: ["dialog", "exit", "box", "block", "modal"],
	edit() {
		return (
			<div>
				<h4>Second Modal</h4>
				<InnerBlocks></InnerBlocks>
			</div>
		);
	},
	save() {
		return (
			<div
				className="exit-intent-modal exit-intent-second modal fade"
				tabindex="-1"
				role="dialog"
				aria-hidden="true"
				{...{ "x-bind:id": "'exit-modal-second-'+id" }}
			>
				<div
					className="modal-dialog modal-lg modal-dialog-centered"
					role="document"
				>
					<div className="modal-content">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
});
