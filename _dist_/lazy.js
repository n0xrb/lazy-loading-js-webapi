const isIntersecting = (entry) => {
	return entry.isIntersecting; // true (dentro de la pantalla)
};
const action = (entry) => {
	console.log("interseccion");
	const node = entry.target; // nodo o div
	const image = node.firstChild;
	image.src = image.dataset.src;

	observer.unobserve(node);
};

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(action);
});
export const imageRegister = (image) => {
	observer.observe(image);
};
