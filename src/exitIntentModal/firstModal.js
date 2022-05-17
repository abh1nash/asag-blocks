import { InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import { Panel, PanelRow, PanelBody, TextControl } from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("abhinash/exit-intent-first-modal", {
	title: "ASAG Exit Intent First Modal",
	category: "asag-blocks",
	keywords: ["dialog", "exit", "box", "block", "modal"],
	edit() {
		return (
			<div>
				<h4>First Modal</h4>
				<InnerBlocks></InnerBlocks>
			</div>
		);
	},
	save() {
		return (
			<div
				className="exit-intent-modal exit-intent-first modal fade"
				tabindex="-1"
				role="dialog"
				aria-hidden="true"
				{...{ "x-bind:id": "'exit-modal-first-'+id" }}
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
