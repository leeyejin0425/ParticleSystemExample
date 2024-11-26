// A simple Particle class

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 255;
        this.w = 2;
    }

    applyRepeller(repeller) {
        for (let particle of this.particles) {
          let force = repeller.repel(particle);
          particle.applyForce(force);
        }
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
        this.lifespan -= 2;

        this.acceleration.set(0, 0);
    }

    display() {
        stroke(200, this.lifespan);
        strokeWeight(5);
        fill(127, this.lifespan);
        ellipse(this.position.x, this.position.y, this.w, this.w);
    }

    isDead() {
        return this.lifespan < 0;
    }
}

