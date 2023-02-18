async function filled() {
    const scripts = document.body.querySelectorAll("script");
    for (const script of scripts) {
        try {
            if (script.src) {
                eval(await (await fetch(script.src)).text());
            } else {
                eval(script.innerText);
            }
        } catch(e) {
            console.error(e);
        }
    }
}
