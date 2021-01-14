console.log("app is running")

let detailsToggle = false;

const onToggle = () => {
  detailsToggle = !detailsToggle
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}> {detailsToggle ? 'Hide' : 'Show'} Details</button>
      {detailsToggle && <p>Details</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

render();





