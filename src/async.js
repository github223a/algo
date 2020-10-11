const bubble = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; i++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
};


// 16000 stack size v8;
//  синхронный код выполнется быстрее но блокирует поток
// event loop ждет очищения стека чтобы выполнить колбек

