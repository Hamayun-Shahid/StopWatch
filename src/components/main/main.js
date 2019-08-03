import React,{Component} from 'react'
import Clock from '../clock/clock';
import Button from '../button/button';
import './main.css';

class Main extends Component {
    
    state = { 
        hour: 0,
        minute:0,
        second: 0
    }
    counter=null;
    start = () => {
        this.counter = setInterval(() => {
            if (this.state.second > 59) {
                this.setState({ minute: this.state.minute + 1, second: 0 })
            }
            if (this.state.minute > 59) {
                this.setState({ hour: this.state.hour + 1, second: 0, minute: 0 })
            }
            this.setState({ second: this.state.second + 1 });
        }, 1000);
    }
    stop = () => {
        clearInterval(this.counter);
    }
    reset = () => {
        clearInterval(this.counter);
        this.counter = null;
        this.setState({hour:0,minute:0,second:0})
    }
    render() { 
        return (
            <div className="test rounded-circle">
                <Clock time={this.state}/>
                <hr />
                <Button start={this.start} stop={this.stop} reset={this.reset}/>
            </div>
        );
    }
}
 
export default Main;