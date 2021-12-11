class Music extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return <footer id="music">
      <div id="soundtrack"><audio controls loop autoPlay><source src="/assets/music/need-a-girl.mp3" type="audio/mpeg"/>Your browser does not support the audio element.</audio></div>
      <p> ©2021 Brandon Ly </p> 
    </footer>
  };
}