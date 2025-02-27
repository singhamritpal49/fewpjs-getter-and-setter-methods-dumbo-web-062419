// Add your Circle class here
class Circle {



    constructor(radius) {
        this.radius = radius;
        this.pi = Math.PI
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return 2 * this.pi * this.radius
    }


    get area() {
        return this.pi * Math.pow(this.radius, 2)
    }


    set diameter( diameter ) {
        this.radius = diameter / 2
      }
    
      set circumference( circumference ) {
        this.radius = circumference / ( this.pi * 2 )
      }



}