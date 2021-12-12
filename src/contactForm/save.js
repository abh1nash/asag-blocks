export default function save({ className }) {
	return (
		<div
			x-data="contactForm"
			x-init="dropdownQuestion()"
			className={className ? className : ""}
		>
			<form {...{ "x-on:submit.prevent": "contactUsForm()" }} className="row">
				<template x-if="showSuccessMessage">
					<div className="text-center col-12">
						<div className="text-primary display-4">
							<i className="fas fa-check-circle"></i>
						</div>
						<div className="lead">
							Your message has been received. We will contact you shortly.
						</div>
					</div>
				</template>
				<template x-if="!showSuccessMessage">
					<div className="row col-12">
						<div className="col-12 my-2">
							<label for="fname">
								<b>First Name</b>
							</label>
							<div class="input-group has-validation">
								<input
									type="text"
									id="fname"
									required="true"
									name="fname"
									x-model="fname"
									class="form-control grey-field"
								/>
							</div>
						</div>
						<div className="col-12 my-2">
							<label for="lname">
								<b>Last Name</b>
							</label>
							<div class="input-group has-validation">
								<input
									type="text"
									id="lname"
									required="true"
									name="lname"
									x-model="lname"
									class="form-control grey-field"
								/>
							</div>
						</div>
						<div className="col-12 my-2">
							<label for="email">
								<b>Email Address</b>
							</label>
							<div class="input-group has-validation">
								<input
									type="email"
									id="email"
									required="true"
									name="email"
									x-model="email"
									class="form-control grey-field"
								/>
							</div>
						</div>
						<div className="col-12 my-2">
							<label for="mobile">
								<b>Mobile Number</b>
							</label>
							<div class="input-group has-validation">
								<input
									type="text"
									id="mobile"
									required="true"
									name="mobile"
									x-model="mobile"
									class="form-control grey-field"
								/>
							</div>
						</div>
						<div class="col-12 my-2">
							<label for="howHelp">
								<b>How can we help?</b>
							</label>
							<div class="input-group">
								<select
									x-model="howCanWeHelp"
									name="howCanWeHelp"
									id="howHelp"
									required
									class="form-control grey-field"
								>
									<option value="" selected></option>
									<template x-for="t in dropdown">
										<option {...{ ":value": "t" }} x-text="t"></option>
									</template>
								</select>
							</div>
						</div>
						<template x-if="howCanWeHelp=='Its something else'">
							<div class="col-12 my-2">
								<label for="otherReason">
									<b>What is it?</b>
								</label>
								<div class="input-group">
									<textarea
										required
										class="form-control grey-field"
										name="otherReason"
										id="otherReason"
										x-model="otherReason"
										rows="5"
									></textarea>
								</div>
							</div>
						</template>
						<div className="col-12">
							<button
								type="submit"
								className="btn btn-accent text-white font-weight-bold"
							>
								Submit
							</button>
						</div>
					</div>
				</template>
			</form>
		</div>
	);
}
