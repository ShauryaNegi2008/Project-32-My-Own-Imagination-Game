class Block {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 0.4

        };
        this.y = random(-50, 50)
        this.body = Bodies.circle(x, y, 20, options)
        this.radius = 20;
        World.add(world, this.body)
    }
    display() {
        fill("gold")
        ellipseMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }

}