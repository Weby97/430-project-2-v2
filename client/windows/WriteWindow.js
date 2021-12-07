// class WriteWindow extends React.Component {
function WriteWindow (props) {
    //constructor(props) {
        //super(props);

        // Using an object to hold all the data in the form.
        const [formData, setFormData] = React.useState({
            name: "",
            note: ""
        });

    //}
    const handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('#successMessage').innerHTML = "Sending...";
        //console.log(formData);
        if($("#name").val() == '' ||  $("#note").val() == '') {
            document.querySelector('#successMessage').innerHTML = "All fields are required.";
            return false;
        }
        
        sendAjax('POST', $("#writeForm").attr("action"), $("#writeForm").serialize(), function() {
            document.querySelector('#successMessage').innerHTML = "Message has been sent!";
        });
        
        return false;
    }
    //render() {
        return (
            <main>
                <h1>Write a Message</h1>
                <h2>Write a message for someone else to read!</h2>

                <form id="writeForm"
                    onSubmit={handleSubmit}
                    name="writeForm"
                    action="/write"
                    method="POST">
                    <label htmlFor="name">Name: </label>
                    <input 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    value={formData.name} 
                    type="text" name="name" id="name"
                    placeholder="Enter your name here" />
                    <br /><br />
                    <label htmlFor="note">Message: </label>
                    <input 
                    onChange={(e) => setFormData({...formData, note: e.target.value})} 
                    value={formData.note} 
                    type="text" name="note" id="note" 
                    placeholder="Write your message here"/>
                    <input type="hidden" name="_csrf" value={props.csrf} />
                    <br /><br />
                    <input className="makeSubmit" type="submit" value="Send Message" />
                </form>

                <div><p id="successMessage"></p></div>
            </main>
        );
    //}
    
}