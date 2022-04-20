import { InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import { Panel, PanelRow, PanelBody, TextControl } from "@wordpress/components";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("abhinash/consultation-modal", {
	title: "Book Free Consultation Modal",
	category: "asag-blocks",
	keywords: ["book", "free", "consultation", "block", "modal"],
	attributes: {
		triggeredBy: { type: "string" },
	},
	edit({ attributes, setAttributes }) {
		return (
			<div>
				<InspectorControls>
					<Panel title="Modal Settings">
						<PanelBody title="Options" icon="admin-settings" initialOpen={true}>
							<PanelRow>
								<TextControl
									label="Triggered by"
									value={attributes.triggeredBy}
									onChange={(value) => setAttributes({ triggeredBy: value })}
								></TextControl>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
				<InnerBlocks placeholder="Content before form"></InnerBlocks>
			</div>
		);
	},
	save({ attributes }) {
		return (
			<div
				x-data="bookFreeConsultationModal()"
				className="free-consultation-modal modal  fade"
				tabindex="-1"
				role="dialog"
				aria-hidden="true"
				data-triggered-by={attributes.triggeredBy}
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<template x-if="status=='filling'">
								<div>
									<div>
										<InnerBlocks.Content />
									</div>
									<form {...{ "x-on:submit.prevent": "submit()" }}>
										<div className="row">
											<div className="col-12 col-md-6">
												<div className="form-group mt-2">
													<strong>Name</strong>
													<div className="input-group input-group-lg">
														<input
															type="text"
															x-model="bookData.name"
															required
															className="form-control grey-field"
														></input>
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group mt-2">
													<strong>Email</strong>
													<div className="input-group input-group-lg">
														<input
															type="email"
															x-model="bookData.email"
															required
															className="form-control grey-field"
														></input>
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6 mt-2">
												<strong>Preference for Contact</strong>
												<div class="form-check">
													<input
														class="form-check-input"
														type="radio"
														name="gridRadios"
														x-model="bookData.preference"
														id="phone-radio"
														value="phone"
														required
													/>
													<label class="form-check-label" for="phone-radio">
														Phone Call
													</label>
												</div>
												<div class="form-check">
													<input
														class="form-check-input"
														type="radio"
														name="gridRadios"
														x-model="bookData.preference"
														id="zoom-radio"
														required
														value="video-meeting"
													/>
													<label class="form-check-label" for="zoom-radio">
														Video Meeting
													</label>
												</div>
											</div>
											<template x-if="bookData.preference=='phone'">
												<div className="col-12 col-md-6">
													<div className="form-group mt-2">
														<strong>Phone Number</strong>
														<div className="input-group input-group-lg">
															<input
																type="text"
																x-model="bookData.phone"
																required
																className="form-control grey-field"
															></input>
														</div>
													</div>
												</div>
											</template>
											<div className="col-12 col-md-6 mt-2">
												<strong>Preferred Time (AEST)</strong>
												<div class="input-group input-group-lg ">
													<select
														required
														class="custom-select grey-field"
														x-model="bookData.time"
													>
														<option value="" selected>
															Choose...
														</option>
														<option value="9am">9am</option>
														<option value="10am">10am</option>
														<option value="11am">11am</option>
														<option value="12am">12am</option>
														<option value="1pm">1pm</option>
														<option value="2pm">2pm</option>
														<option value="3pm">3pm</option>
														<option value="4pm">4pm</option>
													</select>
												</div>
											</div>
											<div className="col-12 text-center my-3">
												<small>
													By submitting this request you are confirming
													acknowledgement and agreement to our{" "}
													<a href="https://asagfirst.com.au/legal/terms-of-use/">
														Website Terms of Use
													</a>{" "}
													and{" "}
													<a href="https://asagfirst.com.au/legal/privacy-and-credit-reporting-policy/">
														Privacy Policy
													</a>
													.
												</small>
											</div>
											<div className="col-12 text-center mt-2">
												<button
													type="submit"
													className="mr-2 btn btn-accent text-white font-weight-bold"
													{...{ "x-bind:disabled": "isLoading" }}
												>
													Submit
												</button>
												<button
													type="button"
													data-dismiss="modal"
													className="btn btn-outline-accent font-weight-bold"
													{...{ "x-bind:disabled": "isLoading" }}
												>
													Cancel
												</button>
											</div>
										</div>
									</form>
								</div>
							</template>
							<template x-if="status=='success'">
								<div className="text-center">
									<div className="display-1 text-primary">
										<i className="fas fa-check-circle"></i>
									</div>
									<h3>Thank You!</h3>
									<p>
										Your request has been submitted successfully. We will get
										back to you soon.
									</p>
									<button
										type="button"
										class="btn btn-accent text-white font-weight-bold"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</template>
							<template x-if="status=='fail'">
								<div className="text-center">
									<div className="display-1 text-danger">
										<i className="fas fa-exclamation-circle"></i>
									</div>
									<h3>Sorry!</h3>
									<p>
										We couldn't process your request at the moment. Please try
										again.
									</p>
									<button
										type="button"
										class="btn btn-accent text-white font-weight-bold"
										data-dismiss="modal"
									>
										Close
									</button>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		);
	},
});
