class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
       return this.state = this.state * 1.5;
    }

    get state() {
        return this.state = this._state;
    }
    
    set state(value) {
        if (value < 0) {
            value = 0;
        } else if (value > 100) {
            value = 100;
        }
        return this._state = value;
    }  
}

class Magazine extends PrintEditionItem {
    constructor (...args) {
        super(...args);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, ...args) {
        super(...args);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (...args) {
        super(...args);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (...args) {
        super(...args);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (...args) {
        super(...args);
        this.type = "detective";
    }
}

class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(key, value) {
        if (this.books.find(item => item[key] === value) === undefined) {
            return null;
        } else {
            return this.books.find(item => item[key] === value);
        }
    }

    giveBookByName(bookName) {
        const theBook = this.books.find(item => item.name === bookName);
        if (theBook === undefined) {
            return null;
        } else {
            this.books.splice(this.books.indexOf(theBook), 1);
            return theBook;
        }
    }
}
///////////////////////////////////Задание номер три/////////////////////////

class Student {
    constructor (name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
  
  
  addMark(mark, subject) {
    if (this[subject] === undefined) {
        this[subject] = [];
        this[subject].push(mark);
    } else if (mark > 5 || mark < 1) {
        return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    } else {
        this[subject].push(mark);
    }
  }
  
  
  getAverageBySubject(subject) {
    if (this[subject] === undefined) {
        console.log(`Несуществующий предмет ${subject}`);
    } else {
        const avr = this[subject].reduce((a, b) => (a + b)) / this[subject].length;
        console.log(`Средний балл по предмету ${subject} ` + avr);
        return avr;
    }
  }
  
  getAverage() {
    const arrOfArrs = Object.values(this).filter((item => Array.isArray(item)));
    const arrOfAvgs = [];
    for (let i = 0; i < arrOfArrs.length; i++) {
        arrOfAvgs.push(arrOfArrs[i].reduce((a, b) => (a + b)) / arrOfArrs[i].length);  
    }
    const avgGlobal = arrOfAvgs.reduce((a, b) => (a + b)) / arrOfAvgs.length;
    return avgGlobal;
  }
}
