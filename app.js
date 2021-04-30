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

    

    savecomments = (event) => {
        event.preventDefault(event);



        let newcomments = [...this.state.comments, `name: ${this.state.nameToAdd}, message: ${this.state.textToAdd}`]
        
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

                    <button className="button is-primary" onClick={this.savecomments}>Submit</button>
                </form>
            </div>
        )
    }    
}



ReactDOM.render(<App/>, document.querySelector('#app'));