let count = 0;

function increment() {
    count++;
    console.log("Count:", count);

    function showCount() {
        console.log("Updated count inside nested function:", count);
    }

    showCount();
}

function decrement() {
    count--;
    console.log("Count:", count);
}

increment();
increment();
decrement();
increment();