import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import shortid from "shortid";
import "./carouselItem";

registerBlockType("abhinash/carousel", {
	title: __("ASAG Carousel"),
	category: "asag-blocks",
	keywords: [__("carousel"), __("slider")],
	attributes: {
		id: { type: "string" },
	},

	edit({ attributes, setAttributes }) {
		if (!attributes.id) setAttributes({ id: shortid.generate() });
		return (
			<div>
				<InnerBlocks
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					placeholder="Insert carousel item"
					allowedBlocks={["abhinash/carousel-item"]}
				></InnerBlocks>
			</div>
		);
	},
	save({ attributes }) {
		return (
			<div
				id={"carousel-" + attributes.id}
				className="carousel slide"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<InnerBlocks.Content />
				</div>
				<a
					className="carousel-control-prev"
					href={"#carousel-" + attributes.id}
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href={"#carousel-" + attributes.id}
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	},
});
