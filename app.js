class App extends React.Component {

    state = {
        
        nameToAdd: "",
        textToAdd: "",
        comments: []
        
    }

    addingName = (event) => {   
        this.setState({
            nameToAdd: event.target.value
        })
    }

    addingText = (event) => {
        
        this.setState({
            textToAdd: event.target.value
        })
    }

    saveComments = (event) => {
        event.preventDefault(event);

        let commentsObjects = {
            name: this.state.nameToAdd,
            message: this.state.textToAdd
        }

        let newcomments = [...this.state.comments, commentsObjects]
        
        this.setState({
            comments: newcomments
        })
        
        console.log(newcomments);
    }

    render() {
        return (
            <div className="app">
                <h1 className="maintitle">SAY SOMETHING</h1>
                <form className="form">
                    <input className="input" type="text" onChange={this.addingName} value={this.state.nameToAdd} placeholder="Your Name"/>
                    <textarea className="textarea" type="text" onChange={this.addingText} value={this.state.textToAdd} placeholder="Your Comment" >{this.state.textToAdd}</textarea>

                    <button className="button is-primary" onClick={this.saveComments}>Submit</button>
                </form>
            </div>
        )
    }    
}



ReactDOM.render(<App/>, document.querySelector('#app'));