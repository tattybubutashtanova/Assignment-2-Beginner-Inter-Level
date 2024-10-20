function throttle(fn, wait) {
    let lastCall = 0;
    return function() {
        const now = new Date().getTime();
        if (now - lastCall < wait) return;
        lastCall = now;
        return fn();
    };
}

const throttledFunction = throttle(() => {
    document.getElementById("result").textContent = "Button clicked!";
}, 2000);

document.getElementById("throttledBtn").addEventListener("click", throttledFunction);
