class Nav extends React.Component{
    constructor(props) {
        super(props);
        
        this.createHomeWindow = this.createHomeWindow.bind(this);
        this.createReadWindow = this.createReadWindow.bind(this);
        this.createWriteWindow = this.createWriteWindow.bind(this);
        this.createMusicWindow = this.createMusicWindow.bind(this);
        this.createSuggestWindow = this.createSuggestWindow.bind(this);
        this.createAdminWindow = this.createAdminWindow.bind(this);
    }
    // Refer to DM-E when it is time to add csrf then remove this comment
    // ----- HOME -----
    createHomeWindow = () => {
        ReactDOM.render(
            <HomeWindow />,
            document.querySelector("#message")
        );
    };
    // ----- READ -----
    createReadWindow = () => {
        ReactDOM.render(
            <ReadWindow />,
            document.querySelector("#message")
        );
    };
    // ----- WRITE -----
    createWriteWindow = () => {
        sendAjax('GET', '/getToken', null, (result) => {
            ReactDOM.render(
                <WriteWindow csrf={result.csrfToken} />,
                document.querySelector("#message")
            );
        });
        
    };
    // ----- MUSIC -----
    createMusicWindow = () => {
        ReactDOM.render(
            <MusicWindow />,
            document.querySelector("#message")
        );
    };
    // ----- SUGGEST -----
    createSuggestWindow = () => {
        ReactDOM.render(
            <SuggestWindow />,
            document.querySelector("#message")
        );
    };
    // ----- ADMIN -----
    createAdminWindow = () => {
        ReactDOM.render(
            <AdminWindow />,
            document.querySelector("#message")
        );
    };
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