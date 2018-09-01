window.addEventListener('load', () => {
    const header = document.querySelector('h1');
    const headerWord = header.querySelector('span');

    const words = [
        'Hello, World!',
        '¡Hola Mundo!',
        '你好，世界!',
        'नमस्ते दुनिया!',
        'สวัสดีชาวโลก!',
        'Привет мир!',
        'こんにちは世界',
        'Halo Dunia!',
        '안녕, 세상!',
        'Hallo Welt!',
        'שלום עולם!',
        'Bonjour le monde!',
    ];

    let index = 0;
    let write = true;

    update(words[0]);
    function rand(min, max) { return Math.floor(Math.random() * min) + max; }

    function update(chars) {
        headerWord.classList.remove('blink');
        if (write) {
            if (chars.length) {
                headerWord.innerHTML += chars[0];
                setTimeout(update, rand(50, 125), chars.slice(1))
            } else {
                write = false;
                headerWord.classList.add('blink');
                setTimeout(update, 2000, words[index])
            }
        } else {
            const current = headerWord.innerHTML;
            if (current.length) {
                headerWord.innerHTML = current.slice(0, -1);
                setTimeout(update, rand(25, 75));
            } else {
                index++;
                if (index == words.length) index = 0;
                write = true;
                headerWord.classList.add('blink');
                setTimeout(update, 500, words[index])
            }
        }
    }
})
