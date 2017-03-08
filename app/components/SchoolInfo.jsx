var React = require("react");

class SchoolInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
         return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                </div>
            </div>
        );
    }
}

module.exports = {SchoolInfo};

/*module.exports = React.createClass({
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                </div>
                <div className="panel-body">
                    {this.props.info.tagline}
                </div>
            </div>
        )
    }
})*/