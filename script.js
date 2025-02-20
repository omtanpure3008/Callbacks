const task1 = (callbackfunction) => {
  setTimeout(() => {
    console.log("Task 1 is completed...!!!");
    callbackfunction();
  }, 2000);
}

const task2 = (callbackfunction) => {
  setTimeout(() => {
    console.log("Task 2 is completed...!!!");
    callbackfunction();
  }, 1500);
}

const task3 = (callbackfunction) => {
  setTimeout(() => {
    console.log("Task 3 is completed...!!!");
    callbackfunction();
  }, 2500);
}

const task4 = () => {
  setTimeout(() => {
    console.log("Task 4 is completed...!!!");
  }, 500);
}



// old way of handling this things
// callback hell
// pyramid of doom

task1(function() {
  task2(function () {
    task3(function () {
      task4();
    });
  });
});


// OR


// Promises