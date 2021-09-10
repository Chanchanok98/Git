import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});






Character.card
import React from 'react';
 
class CharacterCard extends React.Component {
 
    state = {
        active: false
    }
 
    activate = () => {
        this.setState({
            active:true
        });
        if (this.state.active === false)
        this.props.activationHandler(this.props.value);
    }

    
    componentDidUpdate = (prevProps) => {
        console.log(this.props.attempt);
        if (prevProps.attempt !== this.props.attempt || prevProps.reset !==this.props.reset) {
            this.setState({ active: false })
            console.log('...');
        }
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}
 
export default CharacterCard;

