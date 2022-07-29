export default class Background {
	public pos = { x: 0, y: 0 };
	public size = { w: 0, h: 0 };
	public imgSrc: string;
	constructor(public src: string, public cvsW: number, public cvsH: number) {
		this.imgSrc = src;
		this.size.w = cvsW;
		this.size.h = cvsH;
	}
	draw(ctx: CanvasRenderingContext2D) {
		const img: HTMLImageElement = new Image();
		img.src = this.src;
		ctx.drawImage(img, this.pos.x, this.pos.y, this.size.w, this.size.h);
	}
}
