import Datepicker from "./datepicker";
export default function ModalConsultation({ id }) {
	return (
		<div
			className="modal fade"
			id={"consultation-booking" + (id ? `-${id}` : "")}
			role="dialog"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-body">
						<div className="text-center">
							<div className="lead">
								Book in a short consultation with an ASAG product specialist.
							</div>
							<form {...{ "x-on:submit.prevent": "submitConsultationData" }}>
								<div className="row text-left">
									<div className="col-12 col-md-6">
										<div className="form-group mt-2">
											<strong>First Name</strong>
											<div className="input-group input-group-lg">
												<input
													type="text"
													x-model="consultation.fname"
													required
													className="form-control grey-field"
												></input>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="form-group mt-2">
											<strong>Last Name</strong>
											<div className="input-group input-group-lg">
												<input
													type="text"
													x-model="consultation.lname"
													required
													className="form-control grey-field"
												></input>
											</div>
										</div>
									</div>
									<div x-model="consultation.date" className="col-12 col-md-6">
										<div className="form-group form-group mt-2">
											<b>Date</b>
											<Datepicker></Datepicker>
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="form-group mt-2">
											<strong>Time</strong>
											<div className="input-group input-group-lg">
												<input
													type="text"
													id="consultation.time"
													x-model="consultation.time"
													required
													className="form-control grey-field"
												></input>
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group mt-2">
											<strong>What is your best contact number?</strong>
											<div className="input-group input-group-lg">
												<input
													type="text"
													x-model="consultation.contact"
													required
													className="form-control grey-field"
												></input>
											</div>
										</div>
									</div>
									<div className="col-12">
										<button
											type="submit"
											className="my-4 btn btn-accent btn-lg text-white text-uppercase"
										>
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
