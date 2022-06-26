function parseCount(num) {
    if (Number.isNaN(Number.parseInt(num))) {
        const invalidValue = new Error("Невалидное значение");
        throw invalidValue;
    }
    return Number.parseInt(num);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor (one, two, three) {
        this.one = one;
        this.two = two;
        this.three = three;
        if (one + two < three || one + three < two || two + three < one) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
    
    getPerimeter() {
        return this.one + this.two + this.three;
    }

    getArea() {
        const p = (this.one + this.two + this.three) / 2;
        const s = Math.sqrt(p * (p - this.one) * (p - this.two) * (p - this.three));
        return Number.parseFloat(s.toFixed(3));
    }
    
}

function getTriangle(...args) {
    try {
        return new Triangle(...args);
    } catch(err) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },

            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
    }