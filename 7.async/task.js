class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, action, id) {
        if (id === undefined) {
            throw new Error("Не передан параметр id");
        }

        if (this.alarmCollection.some(item => item["id"] === id)) {
            return console.error("Будильник с таким id уже существует");  
        }

        const newAlarm = {
            "id": id,
            "time": time,
            "callback": action
        }
        
        return this.alarmCollection.push(newAlarm);
    }

    removeClock(id) {
        const removeCheck = this.alarmCollection.some(item => item["id"] === id);
        this.alarmCollection = this.alarmCollection.filter(item => item["id"] !== id);
        return removeCheck;
    }

    getCurrentFormattedTime() {
        const currentTime = new Date;
        const currentHours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : `${currentTime.getHours()}`;
        const currentMinutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : `${currentTime.getMinutes()}`;
        return `${currentHours}:${currentMinutes}`;
    }

    start() {
        const checkClock = (item) => {
            const a = item.time;
            const b = new Date(new Date().setHours((Number(a[0] + a[1])), (Number(a[3] + a[4])), 0, 0));
            const alarmTime = `${b.getHours()}:${b.getMinutes()}`;
            if (alarmTime === this.getCurrentFormattedTime()) {
                return item.callback();
            }
        }

        if (this.timerId === null) {
            return this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
        }
    }

    stop() {
        if (this.timerId !== null || this.timerId !== undefined) {
            this.timerId = clearInterval();
            return this.timerId = null;
        }
    }

    printAlarms() {
        console.log("Перечень текщих  будильников: ");
        this.alarmCollection.forEach(item => {
            return console.log(`id: ${item["id"]}, time: ${item["time"]}`)
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let klok = new AlarmClock();
    klok.addClock("20:26", () => console.log("Первый пошел!"), 9);
    klok.addClock("20:27", () => console.log("Второй пошел...."), 9);
    klok.addClock("20:27", () => {console.log("Второй пошел!!"); klok.removeClock(8)}, 8);
    klok.addClock("20:28", () => {console.log("Третий пошел!!!"); klok.stop(); klok.clearAlarms(); klok.printAlarms()}, 10);
    klok.printAlarms();
    klok.start();
}
