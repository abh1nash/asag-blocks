import ModalConsultation from "./modalConsultation";
import ModalFinal from "./modalFinal";
import ModalSuccess from "./modalSuccess";

export default function save({ attributes, className }) {
	return (
		<div
			x-data="subscription()"
			x-init={"()=>{id='-" + attributes.id + "'}"}
			className={`w-full ${attributes.align} ${className}`}
		>
			<div className="h6">{attributes.title}</div>
			<form {...{ "x-on:submit.prevent": "subscribe()" }}>
				<div class="input-group">
					<input
						type="email"
						required
						class="form-control input-md"
						x-model="emailAddr"
						placeholder="Your Email Address"
					/>

					<div class="input-group-append">
						<button
							class="btn btn-accent simple-btn text-uppercase"
							type="submit"
						>
							{attributes.buttonLabel}
						</button>
					</div>
				</div>
			</form>
			<ModalSuccess id={attributes.id}></ModalSuccess>
			<ModalConsultation id={attributes.id}></ModalConsultation>
			<ModalFinal id={attributes.id}></ModalFinal>
		</div>
	);
}
