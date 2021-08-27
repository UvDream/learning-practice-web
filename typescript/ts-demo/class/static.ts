class Grid {
    constructor(public scle: number) {

    }
    static origin = { x: 0, y: 0 }
    calcPosition(point: { x: number, y: number }) {
        let x = point.x - Grid.origin.x
        let y = point.y - Grid.origin.y
        return x * y / this.scle
    }
}
let grid1 = new Grid(1)
let grid2 = new Grid(2)
console.log(grid1.calcPosition({ x: 10, y: 10 }));
console.log(grid2.calcPosition({ x: 10, y: 10 }));

