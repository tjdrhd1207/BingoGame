export const navigate = (to, isReplace = true) => {
    const historyChangeEvent = new CustomEvent("historychange", {
        detail: {
            to,
            isReplace,
        },
    });
    console.log(historyChangeEvent.detail);
    dispatchEvent(historyChangeEvent);
};