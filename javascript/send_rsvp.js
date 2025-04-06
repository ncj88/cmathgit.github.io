/*
async function computePassword() {
	const g = str => new Uint8Array([...unescape(encodeURIComponent(str))].map(c => c.charCodeAt(0))),
		k = g("noreply"),
		m = g("maciasalam"),
		c = await crypto.subtle.importKey('raw', k, { name: 'HMAC', hash: 'SHA-256' }, true, ['sign']),
		s = await crypto.subtle.sign('HMAC', c, m);
	[...new Uint8Array(s)].map(b => b.toString(16).padStart(2, '0')).join('');
	return btoa(String.fromCharCode(...new Uint8Array(s)))
		.split("").map(c => {
			return (((((c.charCodeAt(0) * 777) % 42) + 48) % 2) == 0) ? c.toUpperCase() : ""
		}).join("")
	}

async function sendEmail(subject, body) {
	password = await computePassword()
	let email_cma = Email.send({
		Host: "smtp.gmail.com",
		Username: "noreply.wedding@mail.com",
		Password: password,
		To: "macias.wedding@mail.com",
		From: "noreply.wedding@mail.com",
		Subject: subject,
		Body: body,
	})
	console.log(email_cma)
	console.log(password)
}*/

document.getElementById("yes-go").addEventListener("click", async () => {
	document.getElementById("our-response").textContent = "Thank you! See you soon"
	document.getElementById("no-go").disabled = true
	await new Promise(resolve => setTimeout(resolve, 1500));
	document.getElementById("id01").style.display = "none"
	document.getElementById("no-go").disabled = false

	//sendEmail("YES - Will Attend", document.getElementById("user_response").value)
	document.getElementById("rsvp").style.display = "none"
})

document.getElementById("no-go").addEventListener("click", async () => {
	document.getElementById("our-response").textContent = "Sorry to hear that! Hope to see you soon"
	document.getElementById("yes-go").disabled = true
	await new Promise(resolve => setTimeout(resolve, 1500));
	document.getElementById("id01").style.display = "none"
	document.getElementById("yes-go").disabled = false

	//sendEmail("NO - Will Not Attend", document.getElementById("user_response").value)
	document.getElementById("rsvp").style.display = "none"
})