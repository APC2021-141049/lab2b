function showTwitchModal(titleHtml, contentHtml, buttons) {
	const twitch_modal = document.createElement("div");
	
	twitch_modal.classList.add("twitch_modal");
	twitch_modal.innerHTML = `
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
				document.body.removeChild(twitch_modal);
			}
			
			button.onClick(twitch_modal);
		});
		
		twitch_modal.querySelector(".twitch_modal__bottom").appendChild(element);
	}
	
	twitch_modal.querySelector(".twitch_modal__close").addEventListener("click", () => {
		document.body.removeChild(twitch_modal);
	});
	
	document.body.appendChild(twitch_modal)
}

showTwitchModal("Twitch Gallery", "<p>I am the content of this modal</p>", [
	{
		label: "Return to Page",
		onClick: twitch_modal => {
			console.log("Returning to page.");
		},
		triggerClose: true
	}
]);