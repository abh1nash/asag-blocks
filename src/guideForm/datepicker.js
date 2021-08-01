export default function datePicker() {
	return (
		<div
			x-data="datepicker"
			x-init="()=>{ mindate='today'; init($dispatch);}"
			className="asag-datepicker"
			{...{ "x-on:click.away": "displayPicker=false" }}
		>
			<template x-if="displayPicker==true">
				<div
					className="asag-floating-picker mb-5"
					style="animation-duration: 0.25s"
					{...{
						"x-transition:enter": "animate__animated animate__fadeInDown",
						"x-transition:leave": "animate__animated animate__fadeOutUp",
					}}
				>
					<div className="shadow p-3">
						<div className="asag-datepicker-body">
							<div className="asag-day-month">
								<div className="row">
									<div
										{...{ "x-model.stop": "data.displayed.year" }}
										className="col-4"
									>
										<input
											type="number"
											className="form-control grey-field"
											{...{
												" x-on:input.stop":
													"data.displayed.year=$event.target.value",
												"x-on:change.stop":
													"data.displayed.year=$event.target.value",
												"x-bind:value": "data.displayed.year",
											}}
										/>
									</div>
									<div className="col-8">
										<select
											className="form-control grey-field"
											{...{ "x-model.stop": "data.displayed.month" }}
										>
											<template x-for="month in months">
												<option
													x-text="month.name"
													{...{ "x-bind:value": "month.value" }}
												></option>
											</template>
										</select>
									</div>
								</div>
							</div>
							<div className="asag-dotw">
								<template x-for="dotw in 'SMTWTFS'.split('')">
									<div className="date" x-text="dotw"></div>
								</template>
							</div>
							<div className="asag-days">
								<template x-for="date in getDates()">
									<div
										x-text="date"
										className="date"
										{...{
											"x-bind:class": "dateClasses(date)",
											"x-on:click": "selectDate(date)",
										}}
									></div>
								</template>
							</div>
						</div>
					</div>
				</div>
			</template>
			<div className="input-group input-group-lg">
				<input
					required
					placeholder="DD/MM/YYYY"
					className="form-control grey-field"
					type="text"
					{...{
						"x-bind:value": "data.displayed.value",
						"x-on:input.stop": "parseInput",
						"x-on:focus.prevent": "displayPicker=true",
					}}
				/>
			</div>
		</div>
	);
}
