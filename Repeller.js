class Repeller {
    constructor(x,y){
        this.position = createVector(x,y);
        this.power = 200;
    }

      
  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = -1 * this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }

    show(){
        stroke(2);
        fill('red');
        rect(this.position.x, this.position.y, 50);
        
    }






}