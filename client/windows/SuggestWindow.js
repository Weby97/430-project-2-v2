function SuggestWindow (props) {
    const [formData, setFormData] = React.useState({
        name: "",
        song: ""
    });
//}
const handleSuggestion = (e) => {
    e.preventDefault();
    document.querySelector('#successMessage').innerHTML = "Sending...";
    //console.log(formData);
    if($("#name").val() == '' ||  $("#song").val() == '') {
        document.querySelector('#successMessage').innerHTML = "All fields are required.";
        return false;
    }
    
    sendAjax('POST', $("#suggestForm").attr("action"), $("#suggestForm").serialize(), function() {
        document.querySelector('#successMessage').innerHTML = "Suggestion has been sent!";
    });
    
    return false;
}
        return (
            <main>
                <h1>Suggest a Song!</h1>
                <h2>Got a song you wanna listen to while you read and write? Send a suggestion!</h2>
                
                <form id="suggestForm"
                    onSubmit={handleSuggestion}
                    name="suggestForm"
                    action="/suggest"
                    method="POST">

                <label htmlFor="name">Name: </label>
                <input onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    value={formData.name} 
                    type="text" name="name" id="name"
                    placeholder="Enter name here" />

                <br /><br />

                <label htmlFor="song">Song: </label>
                <input onChange={(e) => setFormData({...formData, song: e.target.value})} 
                    value={formData.song} 
                    type="text" name="suggestion" id="song" 
                    placeholder="Write your suggestion here"/>

                <input type="hidden" name="_csrf" value={props.csrf} />

                <br /><br />

                <input className="makeSubmit" type="submit" value="Send Suggestion" />
            </form>

            <div><p id="successMessage"></p></div>
            </main>
        );
    }