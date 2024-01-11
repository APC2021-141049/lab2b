function showTwitchModal(titleHtml, contentHtml, buttons) {
	const twitchmodal = document.createElement("div");
	
	twitchmodal.classList.add("twitch_modal");
	twitchmodal.innerHTML = `
		<div class="twitch_modal">
			<div class="twitch_modal__inner">
				<div class="twitch_modal__top">
					<div class="twitch_modal__title">${titleHtml}</div>
					<button class="twitch_modal__close" type="button">
						<span class="material-icons">close</span>
					</button>
				</div>
				<div class="twitch_modal__content">${contentHtml}</div>
				<div class="twitch_modal__bottom"></div>
			</div>
		</div>
	`;
	
	for (const button of buttons) {
		const element = document.createElement("button");
		
		element.setAttribute("type", "button");
		element.classList.add("twitch_modal__button");
		element.textContent = button.label;
		element.addEventListener("click", () => {
			if (button.triggerClose) {
				document.body.removeChild(twitchmodal);
			}
			
			button.onClick(twitchmodal);
		});
		
		twitchmodal.querySelector(".twitch_modal__bottom").appendChild(element);
	}
	
	twitchmodal.querySelector(".twitch_modal__close").addEventListener("click", () => {
		document.body.removeChild(twitchmodal);
	});
	
	document.body.appendChild(twitchmodal)
}

showTwitchModal("Twitch Gallery", "<p>I am the content of this modal</p>", [
	{
		label: "Return to Page",
		onClick: twitchmodal => {
			console.log("Returning to page.");
		},
		triggerClose: true
	}
]);