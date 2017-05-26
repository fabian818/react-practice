var GreeterMessage = React.createClass({

  render: function(){
    var name = this.props.name;
    return(
      <div>
      <h1>Some {name}</h1>
      <p>some description</p>
      </div>
      )
  }
});

var GreeterForm = React.createClass({


  onButtonClick: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    this.props.setName(name);
    this.refs.name.value = '';
  },

  render: function(){
    return(
     <form onSubmit={this.onButtonClick}>
     <input type="text" ref="name" />
     <button>Set name </button>
     </form>
     )
  }
})

var Greeter = React.createClass({

  getDefaultProps: function() {
    return {
      name: 'React'
    };
  },

  getInitialState: function() {
    return{
      name: this.props.name
    }
  },

  handleNewName: function(name){
    this.setState({
      name: name
    })
  },

  render: function(){
    var name = this.state.name;
    return (
      <div>
      <GreeterMessage name={name}/>
      <GreeterForm setName={this.handleNewName}/>
      </div>
      );
  }
});

var name = 'Fabian';

ReactDOM.render(
  <Greeter name={name}/>,
  document.getElementById('app')
  )