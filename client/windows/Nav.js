class Nav extends React.Component{
    constructor(props) {
        super(props);
        
        this.createHomeWindow = this.createHomeWindow.bind(this);
        this.createReadWindow = this.createReadWindow.bind(this);
        this.createWriteWindow = this.createWriteWindow.bind(this);
        this.createMusicWindow = this.createMusicWindow.bind(this);
        this.createSuggestWindow = this.createSuggestWindow.bind(this);
        this.createAdminWindow = this.createAdminWindow.bind(this);
        this.randomSong = this.randomSong.bind(this);
    }
    // ----- HOME -----
    createHomeWindow = () => {
        ReactDOM.render(
            <HomeWindow />,
            document.querySelector("#message")
        );
        this.randomSong();
        document.querySelector("#nav").className = "home";
    };
    // ----- READ -----
    createReadWindow = () => {
        ReactDOM.render(
            <ReadWindow />,
            document.querySelector("#message")
        );
        this.randomSong();
        document.querySelector("#nav").className = "read";
    };
    // ----- WRITE -----
    createWriteWindow = () => {
        sendAjax('GET', '/getToken', null, (result) => {
            ReactDOM.render(
                <WriteWindow csrf={result.csrfToken} />,
                document.querySelector("#message")
            );
        });
        this.randomSong();
        document.querySelector("#nav").className = "write";
    };
    // ----- MUSIC -----
    createMusicWindow = () => {
        ReactDOM.render(
            <MusicWindow />,
            document.querySelector("#message")
        );
        this.randomSong();
        document.querySelector("#nav").className = "music";
    };
    // ----- SUGGEST -----
    createSuggestWindow = () => {
        sendAjax('GET', '/getToken', null, (result) => {
            ReactDOM.render(
                <SuggestWindow csrf={result.csrfToken} />,
                document.querySelector("#message")
            );
        });
        this.randomSong();
        document.querySelector("#nav").className = "suggest";
    };
    // ----- ADMIN -----
    createAdminWindow = () => {
        ReactDOM.render(
            <AdminWindow />,
            document.querySelector("#message")
        );
        this.randomSong();
        document.querySelector("#nav").className = "admin";
    };
    // ----- SONGS -----
    randomSong = () => {
        // Change this variable if there are more songs added
        const songLength = 4;
        
        // Basically, what is happening: reset to a random song upon change 
        // (code is written in React.js so autoPlay and closing tag for 'source', etc.)
        let a = Math.floor(Math.random() * songLength);
        let song = document.querySelector("#soundtrack");
        switch (a) {
          case 0:
            song.innerHTML =
              `<audio controls loop autoPlay><source src="/assets/music/need-a-girl.mp3" type="audio/mpeg" />Your browser does not support the audio element.</audio>`;
            break;
          case 1:
            song.innerHTML =
              `<audio controls loop autoPlay><source src="/assets/music/slow-days.mp3" type="audio/mpeg" />Your browser does not support the audio element.</audio>`;
            break;
          case 2:
            song.innerHTML =
              `<audio controls loop autoPlay><source src="/assets/music/spring-vibes.mp3" type="audio/mpeg" />Your browser does not support the audio element.</audio>`;
            break;
          case 3:
            song.innerHTML =
              `<audio controls loop autoPlay><source src="/assets/music/writers-block.mp3" type="audio/mpeg" />Your browser does not support the audio element.</audio>`;
            break;
          default:
            song.innerHTML =
              `<audio controls loop autoPlay><source src="/assets/music/need-a-girl.mp3" type="audio/mpeg" />Your browser does not support the audio element.</audio>`;
            break;
        }
      }
    render(){
        return <nav id="nav">
            <button onClick={this.createHomeWindow}>Home</button> 
            <button onClick={this.createReadWindow}>Read</button>
            <button onClick={this.createWriteWindow}>Write</button>
            <button onClick={this.createMusicWindow}>Music</button>
            <button onClick={this.createSuggestWindow}>Suggest</button>
            <button onClick={this.createAdminWindow}>Admin</button>
            <a href="/logout">Log out</a>
            </nav>;
    }
}