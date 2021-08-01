import { InspectorControls, RichText } from "@wordpress/block-editor";
import shortid from "shortid";
import { Panel, PanelBody, PanelRow, TextControl } from "@wordpress/components";

export default function edit({ attributes, setAttributes, className }) {
	const handleTitleChange = (value) => {
		setAttributes({ title: value });
	};
	const handleLabelChange = (value) => {
		setAttributes({ buttonLabel: value });
	};
	if (!attributes.id) {
		setAttributes({ id: shortid.generate() });
	}
	return (
		<div>
			<InspectorControls>
				<Panel>
					<PanelBody title="Options" icon="admin-settings" initialOpen={true}>
						<PanelRow>
							<TextControl
								value={attributes.id}
								onChange={(value) => {
									setAttributes({ id: value });
								}}
								label="Identifier"
							></TextControl>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className={`w-full ${attributes.align} ${className}`}>
				<div className="h6">
					<RichText
						value={attributes.title}
						onChange={handleTitleChange}
						placeholder="Type form title here..."
					></RichText>
				</div>
				<div class="input-group">
					<input
						type="email"
						required
						class="form-control input-md"
						placeholder="Your Email Address"
					/>

					<div class="input-group-append">
						<button
							class="btn btn-accent simple-btn text-uppercase"
							type="button"
						>
							<RichText
								value={attributes.buttonLabel}
								onChange={handleLabelChange}
								placeholder="Type label here..."
							></RichText>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
