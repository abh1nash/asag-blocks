const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import shortid from "shortid";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import {
	__experimentalNumberControl as NumberControl,
	Panel,
	PanelBody,
	PanelRow,
} from "@wordpress/components";

import "./editor.scss";

registerBlockType("abhinash/faqs", {
	title: __("FAQs"),
	icon: "editor-help",
	category: "asag-blocks",
	keywords: [__("faqs"), __("frequent"), __("questions"), __("query")],
	selector: "div",

	attributes: {
		questions: { type: "array", default: [] },
		answers: { type: "array", default: [], source: "html", multiline: "p" },
		questionsCount: { type: "number" },
	},

	edit: ({ attributes, setAttributes }) => {
		let { questionsCount } = attributes;
		const setQuestionsCount = (value) => {
			setAttributes({ questionsCount: value });
			if (attributes.questions.length <= value) {
				while (attributes.questions.length <= value) {
					let updatedQuestions = attributes.questions;
					let updatedAnswers = attributes.answers;
					updatedQuestions.push("");
					updatedAnswers.push("");
					setAttributes({ questions: updatedQuestions });
				}
			}
			if (attributes.questions.length > value) {
				while (attributes.questions.length > value) {
					let updatedQuestions = attributes.questions;
					let updatedAnswers = attributes.answers;
					updatedQuestions.pop();
					updatedAnswers.pop();
					setAttributes({ questions: updatedQuestions });
				}
			}
		};
		const setQuestion = (index, value, answer = false) => {
			let updatedQuestions = [...attributes.questions];
			let updatedAnswers = answer ? [...attributes.answers] : null;
			if (answer) {
				updatedAnswers[index] = value;
				setAttributes({ answers: updatedAnswers });
			} else {
				updatedQuestions[index] = value;
				setAttributes({ questions: updatedQuestions });
			}
		};

		return (
			<div>
				{
					<InspectorControls>
						<Panel title="FAQs Settings">
							<PanelBody
								title="Settings"
								icon="admin-settings"
								initialOpen={true}
							>
								<PanelRow>
									<NumberControl
										label="No. of Questions"
										value={questionsCount}
										onChange={setQuestionsCount}
									/>
								</PanelRow>
							</PanelBody>
						</Panel>
					</InspectorControls>
				}
				{(!questionsCount || questionsCount === "0") && (
					<div className="editor-placeholder-text">
						Start adding FAQs by setting the value for number of questions
						through the sidebar <b>Settings</b>.
					</div>
				)}
				<div className="editor-faqs-list">
					{questionsCount &&
						Array(questionsCount - 1 + 1)
							.fill(0)
							.map((_, index) => {
								return (
									<div className="editor-faq-item">
										<div className="editor-faq-header">
											<RichText
												value={attributes.questions[index]}
												onChange={(value) => setQuestion(index, value)}
												placeholder="Type question here..."
											/>
										</div>
										<div className="editor-faq-expand-item">
											<RichText
												value={attributes.answers[index]}
												onChange={(value) => setQuestion(index, value, true)}
												placeholder="Type answer here..."
												selector="p"
											/>
										</div>
									</div>
								);
							})}
				</div>
			</div>
		);
	},

	save: ({ attributes }) => {
		shortid.characters(
			"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-"
		);
		const containerId = "container-" + shortid.generate();
		return (
			<div className="accordion my-3" id={containerId}>
				{attributes.questions.map((question, index) => {
					const qid = "q" + shortid.generate();
					return (
						<div className="card" key={qid}>
							<div className="card-header text-left" id={`heading-${qid}`}>
								<h2 className="mb-0">
									<button
										className="btn btn-link text-left collapsed"
										type="button"
										data-toggle="collapse"
										data-target={`#${qid}`}
										aria-expanded="false"
										aria-controls={qid}
									>
										{question}
									</button>
								</h2>
							</div>
							<div
								id={qid}
								className="hide collapse"
								aria-labelledby={`heading-${qid}`}
								data-parent={"#" + containerId}
							>
								<div
									className="card-body text-dark"
									dangerouslySetInnerHTML={{
										__html: attributes.answers[index],
									}}
								></div>
							</div>
						</div>
					);
				})}
			</div>
		);
	},
});
