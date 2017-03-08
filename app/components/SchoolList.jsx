var React = require("react");
var {SchoolInfo} = require("./SchoolInfo.jsx")

class SchoolList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
             <div className="row">
                <div className="col-md-6">
                    //We will add addSchool functionality here
                </div>
                <div className="col-md-6">
                    {
                        this.props.schools.map(function(s,index){
                            return(
                                <SchoolInfo info={s} key={"school"+index} />
                            )         
                        })
                    }
                </div>
           </div>
        );
    }
}

module.exports = {SchoolList};