export default function ModalFinal({ id }) {
	return (
		<div
			className="modal fade"
			id={"subscription-final" + (id ? `-${id}` : "")}
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
							<div className="lead">We will be in touch with you shortly.</div>
						</div>
					</div>
					<div className="modal-footer">
						<div className="text-center w-100">
							<button
								type="button"
								{...{ "x-on:click.prevent": "startTour()" }}
								className="my-2 btn btn-accent btn-lg text-white text-uppercase"
							>
								Take Our Tour
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
