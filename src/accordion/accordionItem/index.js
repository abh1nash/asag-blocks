import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import {
	RichText,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelRow,
	PanelBody,
	ToggleControl,
} from "@wordpress/components";
import shortid from "shortid";

registerBlockType("abhinash/accordion-item", {
	title: "Accordion Item",
	parent: ["abhinash/accordion"],
	category: "abhinash",
	icon: "arrow-down-alt2",
	keywords: [__("accordion"), __("item"), __("entry")],

	attributes: {
		itemId: { type: "string" },
		containerId: { type: "string" },
		isMicrodataBased: { type: "boolean" },
		head: { type: "string" },
		isExpanded: { type: "boolean", deafult: true },
	},
	usesContext: ["abhinash/accordion", "abhinash/accordionMicrodata"],
	edit({ attributes, setAttributes, clientId, context }) {
		// const container = select('core/editor').getBlockRootClientId(clientId);
		// console.log(container);
		const containerId = context["abhinash/accordion"];
		const isMicrodataBased = context["abhinash/accordionMicrodata"];
		setAttributes({ containerId, isMicrodataBased });

		if (!attributes.itemId) setAttributes({ itemId: shortid.generate() });
		return (
			<div>
				<InspectorControls>
					<Panel header="Settings">
						<PanelBody
							title="Accordion Item Settings"
							icon="admin-settings"
							initialOpen={true}
						>
							<PanelRow>
								<ToggleControl
									label="Is expanded"
									checked={attributes.isExpanded}
									onChange={(v) => setAttributes({ isExpanded: v })}
								></ToggleControl>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<div className="accordion-item">
					<div className="accordion-item-head">
						<h3>
							<RichText
								value={attributes.head}
								onChange={(v) => {
									setAttributes({ head: v });
								}}
								placeholder="Enter text here..."
							></RichText>
						</h3>
					</div>
					<div className="accordion-item-body">
						<InnerBlocks></InnerBlocks>
					</div>
				</div>
			</div>
		);
	},

	save({ attributes }) {
		const questionSchema = attributes.isMicrodataBased
			? {
					itemscope: "",
					itemprop: "mainEntity",
					itemtype: "https://schema.org/Question",
			  }
			: {};
		const questionWrapper = attributes.isMicrodataBased
			? { itemprop: "name" }
			: {};
		const answerSchema = attributes.isMicrodataBased
			? {
					itemscope: "",
					itemprop: "acceptedAnswer",
					itemtype: "https://schema.org/Answer",
			  }
			: {};
		const answerWrapper = attributes.isMicrodataBased
			? {
					itemprop: "text",
			  }
			: {};

		return (
			<div {...questionSchema} className="card">
				<div className="card-header">
					<h3
						id={"head-" + attributes.itemId}
						className="accordion-item-heading"
					>
						<button
							{...questionWrapper}
							className={
								"accordion-toggle-btn btn btn-link " +
								(!attributes.isExpanded ? "collapsed" : "")
							}
							type="button"
							data-toggle="collapse"
							data-target={"#content-" + attributes.itemId}
							aria-expanded={attributes.isExpanded}
							aria-controls={"content-" + attributes.itemId}
						>
							{attributes.head}
						</button>
					</h3>
				</div>
				<div
					{...answerSchema}
					data-parent={"#" + attributes.containerId}
					id={"content-" + attributes.itemId}
					aria-labelledby={"head-" + attributes.itemId}
					className={"collapse " + (attributes.isExpanded ? "show" : "")}
				>
					<div {...answerWrapper} className="card-body">
						<InnerBlocks.Content></InnerBlocks.Content>
					</div>
				</div>
			</div>
		);
	},
});
