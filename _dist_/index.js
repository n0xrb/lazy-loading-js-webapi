import { imageRegister } from "./lazy.js";

const createImageNode = () => {
	const randomNumber = Math.floor(Math.random() * 100 + 1);
	const containerNode = document.createElement("div");
	containerNode.className = "p-4";

	const image = document.createElement("img");
	image.className = "mx-auto";
	image.width = "320";
	image.dataset.src = `https://randomfox.ca/images/${randomNumber}.jpg`;

	containerNode.append(image);
	return containerNode;
};

const containerImage = document.getElementById("images");

document.getElementById("addNewImage").addEventListener("click", () => {
	const nuevaImagen = createImageNode();
	imageRegister(nuevaImagen);
	containerImage.append(nuevaImagen);
});

document.getElementById("clearImageContainer").addEventListener("click", () => {
	containerImage.innerHTML = "";
});
