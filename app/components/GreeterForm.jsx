var React = require('react');

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


module.exports = GreeterForm;