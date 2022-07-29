export default class Car {
	public pos = {
		x: 0,
		y: 0,
	};
	public size = {
		w: 0,
		h: 0,
	};
	public imgSrc;
	constructor(
		public x: number,
		public y: number,
		public width: number,
		public height: number,
		public src: string,
		public ctx: CanvasRenderingContext2D,
	) {
		this.pos = {
			x: this.x,
			y: this.y,
		};
		this.size = {
			w: this.width,
			h: this.height,
		};
		this.imgSrc = src;
		this.draw(ctx);
	}

	draw = (ctx: CanvasRenderingContext2D) => {
		const img: HTMLImageElement = new Image();
		img.src = this.imgSrc;
		img.onload = () =>
			ctx.drawImage(img, this.pos.x, this.pos.y, this.size.w, this.size.h);
	};
}
