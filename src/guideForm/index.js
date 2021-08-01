import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";

registerBlockType("abhinash/guide-form", {
	title: __("ASAG Guide Form"),
	category: "asag-blocks",
	keywords: [__("reverse mortgage"), __("guide"), __("download"), __("form")],
	attributes: {
		id: { type: "string" },
		title: { type: "string" },
		buttonLabel: { type: "string" },
		align: { type: "string" },
	},
	supports: {
		align: ["center", "left", "right"],
	},
	edit,
	save,
});
