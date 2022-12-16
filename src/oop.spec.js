const assert = require('assert');
const core = require('./oop');
const {Point3D} = require("./oop");
const {json} = require("mocha/lib/reporters");

describe('ООП', () => {
    describe('#Point', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y', () => {
            const point = new core.Point(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
        });

        it('Точка создается без параметров, x и y принимают нули как значение по умолчанию', () => {
            const point = new core.Point();

            assert.strictEqual(point.x, 0);
            assert.strictEqual(point.y, 0);
        });

        it('Точка создается с одним параметром, x принимает значение, y принимают нуль как значение по умолчанию', () => {
            const point = new core.Point(1);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 0);
        });
    });

    describe('#Point3D', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y, z принимает нуль как значение по умолчанию', () => {
            const point = new core.Point3D(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
            assert.strictEqual(point.z, 0);
        });

        it('Точка создается с тремя параметрами, которые становятся x, y, z', () => {
            const point = new core.Point3D(1, 2.5, -3);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2.5);
            assert.strictEqual(point.z, -3);
        });

        it('Point3D имеет статический метод vectorLength', () => {
            const pointA = new core.Point3D(1, 2, -3);
            const pointB = new core.Point3D(1, -1, 1);

            assert.strictEqual(typeof Point3D.vectorLength, 'function');

            const length = Point3D.vectorLength(pointA, pointB);

            assert.strictEqual(length, 5);
        });
    });

    describe('#Queue', () => {
        it('проверка иницилизации, когда без параметров', () => {
            const queue = new core.Queue();
            assert.strictEqual(queue.size, 0);
        });

        it('проверка иницилизации, когда параметр - массив', () => {
            const queue = new core.Queue([1,2,3,4]);
            assert.strictEqual(JSON.stringify(queue.array) === JSON.stringify([1,2,3,4]), true);
        });

        it('Проверка на вствку в конец', () => {
            const queue = new core.Queue([1,2,3,4]);
            queue.push(5)
            assert.strictEqual(JSON.stringify(queue.array) === JSON.stringify([1,2,3,4,5]), true);
        });

        it('Получить из начала', () => {
            const queue = new core.Queue([1,2,3,4]);
            assert.strictEqual(queue.pop(), 1);
        });
    });
});
