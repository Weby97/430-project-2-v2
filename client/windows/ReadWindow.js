function ReadWindow () {
    const getMessage = (e) => {
        e.preventDefault();
        //console.log(formData);
        sendAjax('GET', '/getRandom', null, (data) => {
            document.querySelector('#randomNote').innerHTML = `"<b>${data.note[0].note}"</b></br> - ${data.note[0].name}`;
        });
    }
    return (
        <main>
            <h1>Read Messages</h1>
            <h2>Read a message someone left here!</h2>
            <button onClick={getMessage}>Get Message</button>
            <div><p id="randomNote"></p></div>
        </main>
    );
}