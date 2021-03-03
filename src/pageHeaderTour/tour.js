export default function TourModal() {
	return (
		<div
			x-data="faTour()"
			x-init="initiateTour()"
			className="tour-modal modal  fade"
			id="faTourModal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="tourModalLabel"
			aria-hidden="true"
		>
			<div
				className="modal-dialog modal-lg modal-dialog-centered"
				role="document"
			>
				<div className="modal-content">
					<div className="text-center bg-secondary text-white py-3">
						<h3
							x-text="playing().title"
							{...{
								"x-transition:enter": "animation fade-in",
								"x-transition:leave": "animation fade-out",
							}}
						></h3>
					</div>
					<div className="modal-body">
						<div id="tour-video"></div>
						<template x-if="playing().delayedBtn">
							<div className="delayed-btn text-center">
								<template x-if="!!playing().delayedBtn && playing().delayedBtn.show">
									<button
										style="transition: 0.25s"
										x-text="playing().delayedBtn.text"
										className="btn-lg btn"
										{...{
											"x-transition:enter": "animation fade-in",
											"x-transition:leave": "animation fade-out",
											"x-on:click.prevent":
												"btnClickAction(playing().delayedBtn.btnAction)",
											":class":
												"{'btn-outline-accent': playing().delayedBtn.isSecondary, 'btn-accent': !playing().delayedBtn.isSecondary}",
										}}
									></button>
								</template>
							</div>
						</template>
						<div className="btns text-center">
							<template x-if="playing().btns && playing().btns.length>0">
								<div>
									<template x-for="btn in playing().btns">
										<button
											style="transition: 0.25s"
											className="btn-lg btn"
											x-text="btn.text"
											{...{
												"x-transition:enter": "animation fade-in",
												"x-transition:leave": "animation fade-out",
												"x-on:click.prevent": "btnClickAction(btn.btnAction)",
												":class":
													"{'btn-outline-accent': btn.isSecondary, 'btn-accent': !btn.isSecondary}",
											}}
										></button>
									</template>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
