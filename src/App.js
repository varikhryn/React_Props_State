import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task2: '',
      count: 0,
    }

    this.task1 = this.task1.bind(this);
    this.task2 = this.task2.bind(this);
    this.plusCount = this.plusCount.bind(this);
    this.ResetCount = this.ResetCount.bind(this);
  }

  task1() {
    console.log('***   TASK 1 ***');
    console.log('button work.');
  }

  task2() {
    this.setState({
      task2: 'button work',
    })
  }

  // task 3
  plusCount(event) {
    this.setState({
      count: this.state.count + 1,
    });
  }

  ResetCount() {
    this.setState({
      count: 0,
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Homework 9</h1>
        {/* task 1 */}
        <div className="item">
          <h2>Task 1</h2>
          <p>Создайте кнопку. Повесьте на нее событие click. При клике выводите в консоль сообщение - button work.</p>
          <button onClick={this.task1}>Task 1</button>
        </div>

        {/* task 2 */}
        <div className="item">
          <h2>Task 2</h2>
          <p>Добавьте параграф. При клике по кнопке - выводите текст button work в параграф.</p>
          <button onClick={this.task2}>Task 2</button>
          <p>{this.state.task2}</p>
        </div>

        {/* task 3 */}
        <div className="item">
          <h2>Task 3</h2>
          <p>Добавьте кнопку с текстом Count. Создайте state.count = 0 и выведите его на страницу в параграф. Добавьте на кнопку Count событие, которое будет вызывать метод увеличивающий state.count на единицу при каждом нажатии.</p>
          <button onClick={this.plusCount}>Count</button>
          <p>{this.state.count}</p>
        </div>

        {/* task 4 */}
        <div className="item">
          <h2>Task 4</h2>
          <p>Добавьте кнопку ResetCount обновляющую count в предыдущей задаче.</p>
          <button onClick={this.ResetCount}>ResetCount</button>
        </div>


      </div>
    );
  }
}

export default App;
