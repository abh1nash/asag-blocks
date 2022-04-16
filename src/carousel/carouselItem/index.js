import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import shortid from "shortid";

registerBlockType("abhinash/carousel-item", {
	title: __("ASAG Carousel Item"),
	category: "asag-blocks",
	keywords: [__("carousel"), __("slider")],
	attributes: {
		id: { type: "string" },
	},
	edit({ attributes, setAttributes }) {
		if (!attributes.id) setAttributes({ id: shortid.generate() });
		return (
			<div className="carousel-item">
				<InnerBlocks placeholder="Add carousel content"></InnerBlocks>
			</div>
		);
	},
	save({ attributes }) {
		return (
			<div className="carousel-item" id={"carousel-item-" + attributes.id}>
				<InnerBlocks.Content />
			</div>
		);
	},
});
