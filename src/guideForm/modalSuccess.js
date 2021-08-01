export default function ModalSuccess({ id }) {
	return (
		<div
			className="modal fade"
			id={"subscription-success" + (id ? `-${id}` : "")}
			tabindex="-1"
			role="dialog"
		>
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-body">
						<div className="text-center">
							<div className="display-4 text-primary">
								<i className="fas fa-check-circle"></i>
							</div>
							<div className="h4">Thank You!</div>
							<div className="lead">
								Your ASAG Equity Release Brochure has been sent.
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<div className="text-center w-100">
							<div className="">
								Book in a short consultation with an ASAG product specialist.
							</div>
							<button
								type="button"
								{...{
									"x-on:click.prevent": "displayConsultationBookingForm()",
								}}
								className="my-2 btn btn-accent btn-lg text-white text-uppercase"
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
