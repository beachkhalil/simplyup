window.GAME_VERSION = 'v0.9.6i';

if (!new URLSearchParams(window.location.search).get('noPoki') ) {

    PokiSDK.init().then(() => {
        console.log("Poki SDK successfully initialized");
        // fire your function to continue to game
    }).catch(() => {
        console.log("Initialized, but the user likely has adblock");
        // fire your function to continue to game
    });
}