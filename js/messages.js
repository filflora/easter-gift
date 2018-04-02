(function() {

    let nextDisabled = false;
    let messageCursor = 0;
    const animationStopIdx = 6;
    const messages = [
        'Mesebeli tündérvárban<br> tündérrózsakertben jártam,<br> ... <br>',
        's egy tündérrózsát legottan<br> mindjárt le is szakítottam.<br> ... <br>',
        'Tündérrózsa leveléből,<br> tündér illatú levéből<br> készült e tündéri oldat<br> e tündéri csodaszer,<br> ... <br>',
        'véle hogyha meglocsollak,<br> Te is tündérré leszel.<br> ... <br>',
        'Jóért jótettként cserébe<br> piros tojást kérek érte.<br> ... <br>',
        'Szabad-e locsolni? 😉',
        'Kellemes Húsvét hétfőt Kedvesem! ❤️️️',
        '<img src="images/bg.jpg" class="img" alt="" />'
    ];


    function getTarget() {
        return document.querySelector('#message-container .item');
    }

    function init() {
        document.querySelector('body').addEventListener('click', nextMessage);

        console.log("❤️️️❤️️️❤️️️ Isn't she the best? 😄 She even checked out the console messages... ❤️️️❤️️️❤️️️")
        
        nextMessage();
    }
    
    function nextMessage() {
        const $target = getTarget();

        if( messageCursor < messages.length ) {
            
            if( !nextDisabled ) {
                nextDisabled = true;

                if( messageCursor === animationStopIdx ) {
                    document.getElementsByTagName('canvas')[0].classList.add('hide');
                    document.getElementById('starField').classList.remove('hide');
                }
                $target.classList.add('hide');
                setTimeout(() => {
                    $target.innerHTML = messages[messageCursor];
                    $target.classList.remove('hide');
                    messageCursor++;
                    nextDisabled = false;
                }, 1000);
            }
            
        } else {
            document.querySelector('body').removeEventListener('click', nextMessage);
        }

    }



    init();

})();