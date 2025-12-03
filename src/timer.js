const waitAndPrint = (message, delay) => {
    let incre_world = message;
    setInterval(() => {
        console.log(incre_world);
        incre_world += " world!";
    }, delay);
}

// Example usage:
waitAndPrint("Hello, world!", 3000);
