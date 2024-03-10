/**
 * 커스텀 navigate함수
 * @param { string } to
 * @param { boolean } isReplace
 * 
 *  */

export const navigate = (to, isReplace = true) => {
    const historyChangeEvent = new CustomEvent("historychange", {
        detail: {
            to,
            isReplace,
        },
    });
    console.log("커스텀 이벤트");
    console.log(historyChangeEvent.detail);
    dispatchEvent(historyChangeEvent);
};