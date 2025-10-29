var cartaActual = 0;

const cartas = [
    ["felices 10 meses amor",
    "amor se que me demore un poquitin con el regalo pero queria hacer algo que te gustara y puedas usar durante harto tiempo, espero que te guste y lo uses JKDSAJKD pq si no me voy a morir me costo hacerlo no suelo programar con javascript te amo mucho mi vida espero que estes teniendo un dia tan hermoso como tu lo eres para mi, gracias por ser mi compañera de vida y por aguantarme en mis peores momentos, prometo seguir esforzandome para ser mejor cada dia y hacerte feliz como tu me haces a mi, te amo con todo mi corazon y espero que podamos seguir celebrando muchos meses y años y siglos y decadas y años luz juntos, feliz dia mi amor ❤️❤️❤️ se que no es como el tipo de regalo convencional de que son muchas cartas y te dice como abrelo cuando noseque a mi se me ocurrio hacerlo así pq hace unos dias tambien intente hacerlo en papel pero no salio para nada bien salio horrible asi que decidi hacertelo bonito y con amor aqui pq esto es lo que me gusta hacer, te amo muchisimo miamor ojala podamos crear infinitos recuerdos mas juntos porque cada segundo que paso a tu lado se me ablandese el alma eres demasiado tierna te amo",],
    ["holi amor", "ola amorsito nose porque me extrañaras sera porque recien dejamso de vernos o estamos peleados nose pero quiero que sepas que yo siempre te extraño muero por verte cada segundo siempre extraño tu olorsito rico que siempre recuper o cuando nos vemos jejejeejejejejej ya no si pero tambien si quieres hacerme sentir mejor solo con que me digas que me extrañas ya me haces sentir super bien wawa yo tambien te extraño mucho amor no sabes como deseo estar a tu lado en este momento abrazandote y besandote wawa eres lo mejor que me ha pasado en la vida y no puedo esperar para verte de nuevo amor te amo mucho wawa espero que podamos vernos pronto y pasar tiempo juntos te amo mucho wawa eres mi todo mi vida mi amor mi wawa preciosa tiamo mucho amor no sabes como deseo estar contigo en este momento abrazandote y besandote wawa eres lo mejor que me ha pasado en la vida y no puedo esperar para verte de nuevo amor te amo mucho wawa espero que podamos vernos pronto y pasar tiempo juntos te amo mucho wawa eres mi todo mi vida mi amor mi wawa preciosa tiamo mucho amor"],
    ["WAWA HAMBRIENTa", "holi amor si tienes hambre y no me puedes comer a mi (terrible situacion) te voi a aser una check list 1. busca frutas o algo rico pq asi eso es saludable y es gymrat como a ti te gustaria ser si fueras hombre bueno ahi te puedes acercar un poquitito seras mas sigma si comes frutas +100 social credit si no tambien 2. puedes buscar para hacerte un pansito rico con mermelada que tanto te gusta 3. tambien mira como soy un pillo te voy a dejar senda receta de panqueques que uso yo para comer son super ricos mira (acabo de revisar la receta es de la thermo pero como cuesta plata verlo fuera de la thermo te voy a poner el link de una parecida que encontré) https://www.recetasnestle.cl/recetas/receta-de-panqueques-con-manjar"],
    ["wawa angry", "holi amor no se cual sería la situación actual de los dos, pero si estas enojada conmigo quiero que sepas que lo siento mucho si te hice sentirm al me carga hacerte sentir mal me siento pésimo te lo digo enserio que no fue mi intención hacerte sentir así, yo solo quiero que seas feliz y que estemos bien los dos juntos, si me equivoque en algo por favor dime para poder arreglarlo y no volver a cometer el mismo error te amo mucho wawa porfa no estes enojada conmigo tiamo linda presiosa yo siempre te amé amo y amaré nunca dudes de eso porfi de mi yo del pasado ahora mismo pido perdón por la estupidez que quizas hice te juro por lo que quieras que lo último que quiero es que te sietnas mal no sabes lo que se me destruy eel corazón cuando veo tu carita llorando por algo que hice yo por eso amor si hice algo torpe porfavor hablemoslo y se podrá solucionar yo siempre pondre todo de mi parte para poder estar felices los dos y sin problemas y juntitos shi te amo amor shi shi shi shi hsi hsi hsi hsi hsi !!! ! ! ! : 3 3 33"],
    ["wawa felis", "holi amor que alegria me da saber que estas feliz me pone muy contento saber que estas bien y feliz wawa sabes que yo siempre quiero verte feliz y hacerte sonreir asi que si estas feliz me siento el hombre mas afortunado del mundo por tener a alguien tan especial como tu a mi lado te amo mucho wawa espero que sigas estando feliz y que podamos compartir muchos momentos felices juntos te amo mucho wawa tu felicidad es mi felicidad ojala estes ahora mismo super hiper mega felis amor tu sonrisa me derrite es tan nanai coshita mas encima  cuando estas feliz te pones super tierna me gusta cuando muestras tu felciiad ojala me cuentes todo lo que te hace feliz y pueda compartirlo contigo porque es lo que mas me emociona del mundo amorshito te amo infinito amorshito muchos besitos para la novia masl inda del mundo te amo amor"],
    ["omg que terrible", "ola amor si no te he contestado probablemente estaba ocupado en algo o nose pero no es pq no quiera hablar contigo ni nada no te preocupes pero igual voy a tratar de contestarte lo mas rapido posible pq me encanta hablar contigo wawa no pienses que no quiero hablar contigo o algo asi pq no es asi te lo juro amor te amo mucho wawa eres lo mejor que me ha pasado en la vida y no quiero perderte por nada del mundo te amo mucho wawa perdon si te hice sentir mal por no contestarte rapido ermosa amorshito no se en que situación estarás leyendo esto nose si sea que esté jugando o algo asi nose pero de todas maneras te contestaré porque me encnanta hablar contigo y no quiero que pienses que me da lata hablarte o algo asi amor de hecho sabias que cuando juego he perdido rondas en rankeds del valorant solamente por que te respondo y no compro nada en la fase de compra bueno para que veas... iwal yo siempre 一杯大好き sea la situacion en la que esté yo voy a querer en el fondo responderte te lo juro pq yo lo sé es irresistible las ganas de escribirte y que me trates como wawa asi que intenta escribirme por discord o algo asi demas que te contesto por ahi pq igual a veces no tengo bateria o no me llegan los mensajes de ig ya sea pr el modo sueño raro ese que se pone de la nada o nose eso amor del futuro saludos ojala te conteste pronto te amo mucho WAWA  ❤️"], 
    ["beshito", "mira amorshito hice un boton que me va a mandar a un discord que me quieres dar un beso asi que oslo apreta le boton y yo tendre el mensajito ahi y sabre que me quieres dar un beso igual aqui en el menu hay un coso para dejarme un mensaje en el discord jakdjksajdlksajdlksajdlsaj teamo"],
    ["amor aburrida", "holi amorshito si estas aburrida queria decirte que escuches esta cancion uwu https://open.spotify.com/track/6BGNjTZ8zp9MlsIydBa7A9?si=ba93296bb3fb4a9b es una cancion que me gusta mucho y por mas corta que sea es lo que siento contigo amor me hace pensar en ti cuando la escucho espero que te guste tambien wawa te amo mucho no sabes como deseo estar contigo en este momento lksjdlkasjdks"],
    ["linda", "mandame un mesnajito a q ui u wu"]];
var modalOverlay, modalMessage, modalCloseButton, mensajeHeader, mensajeParrafo, besoCounter, besoWebhook, mensajitoWebhook, mensajitoInput;

document.addEventListener("DOMContentLoaded", function() {

    mainPagina = document.getElementById("mainPagina");
    modalOverlay = document.getElementById("modal-overlay");
    modalMessage = document.getElementById("modal-message");
    modalCloseButton = document.getElementById("modal-close-button");
    mensajeHeader = document.getElementById("mensajeHeader");
    mensajeParrafo = document.getElementById("mensajeParrafo");
    besoCounter = document.getElementById("besoCounter");
    besoWebhook = document.getElementById("besoWebhook");
    mensajitoWebhook = document.getElementById("mensajitoWebhook");
    mensajitoInput = document.getElementById("mensajitoInput");
    
    const openBoton = document.getElementById('loginBoton');
    openBoton.addEventListener('click', () => {
        const palabra = document.getElementById('loginPalabra').value;
        if (palabra.toString() === 'valentine') {
            mainPagina.classList.remove("hidden");
            const loginSection = document.getElementById("loginSection");
            loginSection.classList.add("hidden");
        }

    modalCloseButton.addEventListener("click", function() {
        modalOverlay.classList.remove("modal-visible");
        modalOverlay.classList.add("modal-oculto");
    });
});
});

function abrir(coso) {
    besoWebhook.classList.add("hidden");
    mensajitoWebhook.classList.add("hidden");

    modalOverlay.classList.remove("modal-oculto");
    modalOverlay.classList.add("modal-visible");
    mensajeHeader.textContent = cartas[coso - 1][0];
    mensajeParrafo.textContent = cartas[coso - 1][1];

    if (coso === 7) {
        besoWebhook.classList.remove("hidden");
    } else if (coso === 9) {
        mensajitoWebhook.classList.remove("hidden");
    }
}

function discordWebhook(mensaje) {
    var request = new XMLHttpRequest();
    const webhookUrl = 'https://discord.com/api/webhooks/1433206209363705856/7pWVYWB3z5SiE5TjrZ3Zo5_jvljQItQbCpVBRatE3M76ljkPa0E49PaN-7X-j30GDBg1';
    request.open('POST', webhookUrl);
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
        username: "amor",
        content: mensaje
    };
    request.send(JSON.stringify(params));
}

function besos() {
    discordWebhook("     " + besoCounter.value + " besitos uwu");
    alert("besito enviado");
}

function mandarMensaje() {
    if (mensajitoInput.value.length > 200) {
        alert("el mensajito es muy largo, maximo 200 caracteres");
        return;
    } else if (mensajitoInput.value.length === 0) {
        alert("el mensajito no puede estar vacio");
        return;
    }

    discordWebhook(mensajitoInput.value);
    alert("mensajito enviado");
}