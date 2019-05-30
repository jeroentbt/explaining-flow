require('./animation').initialize();
const {generateWorkItems, randomBetween} = require('./generator');

const {Worker, WorkList} = require('./worker');
const Board = require('./board');
const TimeAdjustments = require('./timeAdjustments');
require('./stats').initialize();


TimeAdjustments.speedUpBy(20);

let board = new Board(
  new WorkList('Backlog'),
  new WorkList('ux'),
  new WorkList('-'),
  new WorkList('dev'),
  new WorkList('-'),
  new WorkList('qa'),
  new WorkList('Done')
);

board.addWorkers(
  new Worker({ux: randomBetween(0.8, 1.2)}),
  new Worker({dev: randomBetween(0.8, 1.2)}),
  new Worker({qa: randomBetween(0.8, 1.2)}),
);

board.addWorkItems(...generateWorkItems({
    ux: randomBetween(0.8, 1.2),
    dev: randomBetween(0.8, 1.2),
    qa: randomBetween(0.8, 1.2)
  },
));

board.runSimulation();
