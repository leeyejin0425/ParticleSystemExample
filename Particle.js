// A simple Particle class

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 255;
        this.w = 2;
    }

    run() {
        this.update();
        this.display();
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 5;

        this.acceleration.set(0, 0);
    }

    display() {
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(127, this.lifespan);
        line(this.position.x+random(10,50), this.position.y+random(10,50), this.w+random(10,50), this.w+random(10,50));
    }

    isDead() {
        return this.lifespan < 0;
    }
}

