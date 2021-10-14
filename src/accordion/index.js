import shortid from "shortid";
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	Panel,
	ToggleControl,
} from "@wordpress/components";
import { useSelect } from "@wordpress/data";

import "./accordionItem";

/* Blocks eligible for schema answer and corresponding attribute 
   to be considered for the value of answer. */
const VALID_ANS_BLOCKS = {
	"core/paragraph": "content",
};

registerBlockType("abhinash/accordion", {
	title: "Accordion",
	category: "abhinash",
	icon: "arrow-down-alt2",
	children: ["abhinash/accordion-item"],
	keywords: [__("faqs"), __("accordion"), __("frequently asked questions")],
	supports: {
		align: ["full"],
		alignWide: true,
	},
	attributes: {
		containerId: { type: "string" },
		generateFAQSchema: { type: "boolean" },
		parentHasFAQContext: { type: "boolean" },
		faqSchema: { type: "string" },
	},
	providesContext: {
		"abhinash/accordion": "containerId",
		"abhinash/accordionMicrodata": "parentHasFAQContext",
	},
	edit({ attributes, setAttributes, clientId }) {
		if (!attributes.containerId)
			setAttributes({
				containerId: "accordion-" + shortid.generate(),
			});

		const schemaData = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: [],
		};

		const faqEntry = (q, a) => {
			return {
				"@type": "Question",
				name: q,
				acceptedAnswer: {
					"@type": "Answer",
					text: a,
				},
			};
		};

		const children = useSelect((select) => {
			// const cid = select('core/block-editor').getBlocksByClientId(clientId)[0]
			//   .innerBlocks;
			return select("core/block-editor").getBlock(clientId).innerBlocks;
		}, []);

		if (children.length > 0) {
			children.forEach((child) => {
				let ques = child.attributes.head;
				let ans = "";
				if (child.innerBlocks.length > 0) {
					child.innerBlocks.forEach((block) => {
						if (Object.keys(VALID_ANS_BLOCKS).includes(block.name)) {
							ans += block.attributes[VALID_ANS_BLOCKS[block.name]];
						}
					});
				}

				if (ans) {
					schemaData.mainEntity.push(faqEntry(ques, ans));
				}
			});
		}

		setAttributes({ faqSchema: JSON.stringify(schemaData) });

		return (
			<div>
				<InspectorControls>
					<Panel header="Settings">
						<PanelBody
							title="Accordion Settings"
							icon="admin-settings"
							initialOpen={true}
						>
							<PanelRow>
								<ToggleControl
									label="Generate FAQ Schema"
									checked={attributes.generateFAQSchema}
									onChange={(v) => setAttributes({ generateFAQSchema: v })}
								></ToggleControl>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label="FAQ Microdata"
									checked={attributes.parentHasFAQContext}
									onChange={(v) => setAttributes({ parentHasFAQContext: v })}
								></ToggleControl>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<div className="accordion">
					<InnerBlocks
						renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
						placeholder="Insert accordion item"
						allowedBlocks={["abhinash/accordion-item"]}
					></InnerBlocks>
				</div>
			</div>
		);
	},
	save({ attributes }) {
		return (
			<div>
				{!!attributes.generateFAQSchema && !attributes.parentHasFAQContext && (
					<script type="application/ld+json">{attributes.faqSchema}</script>
				)}
				<div class="accordion" id={attributes.containerId}>
					<InnerBlocks.Content></InnerBlocks.Content>
				</div>
			</div>
		);
	},
});
