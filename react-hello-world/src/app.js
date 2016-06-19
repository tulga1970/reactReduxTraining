class HelloComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloComponent name="World asdf" />,
  document.getElementById('root'));
