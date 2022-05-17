import { registerBlockType } from "@wordpress/blocks";

registerBlockType("abhinash/modal-close-button", {
	title: "Modal Close Button",
	category: "asag-blocks",
	keywords: ["dialog", "exit", "modal", "close", "button"],
	edit() {
		return (
			<button
				type="button"
				className="close"
				data-dismiss="modal"
				aria-label="Close"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		);
	},
	save() {
		return (
			<button
				type="button"
				className="close"
				data-dismiss="modal"
				aria-label="Close"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		);
	},
});
