import Background from "./Background";
// @ts-ignore
import parking_lot from "../assets/icons/parking_lot.jpg";
import Car from "./Car";
import car1 from "../assets/icons/car1.png";
import car2 from "../assets/icons/car2.png";

export default class Player {
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
	move = (
		condition: boolean,
		func: () => void,
		ctx: CanvasRenderingContext2D,
	) => {
		if (condition) {
			func();
			const carOne = new Car(340, 95, 192, 192, car1, this.ctx);
			const carTwo = new Car(575, 95, 192, 192, car2, this.ctx);
			const bg = new Background(parking_lot, 1600, 700).draw(ctx);
			carOne.draw(this.ctx);
			carTwo.draw(this.ctx);
			this.draw(ctx);
		}
	};
	registerListeners(ctx: CanvasRenderingContext2D) {
		window.addEventListener("keydown", (e) => {
			switch (e.code) {
				case "ArrowUp":
				case "KeyW":
					this.move(
						this.pos.y >= 0,
						() => {
							this.pos.y = this.pos.y - 30;
						},
						ctx,
					);
					break;
				case "ArrowDown":
				case "KeyS":
					this.move(
						this.pos.y <= 600,
						() => {
							// This represents how every car has "The best acceleration" but yet have the worst brakes
							this.pos.y = this.pos.y + 5;
						},
						ctx,
					);
					break;
				case "ArrowLeft":
				case "KeyA":
					this.move(
						this.pos.x >= 0,
						() => {
							this.pos.x = this.pos.x - 10;
						},
						ctx,
					);

					break;
				case "ArrowRight":
				case "KeyD":
					this.move(
						this.pos.x <= 1500,
						() => {
							this.pos.x = this.pos.x + 10;
						},
						ctx,
					);
					break;
				default:
					break;
			}
			// console.log(`When ${key} is pressed,  x =  ${rvrX} + " | y = " + ${rvrY}`);
		});
	}
}
