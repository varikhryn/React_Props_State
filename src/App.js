import React from 'react';
import './App.css';
import imgTask14 from './task14.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task2: '',
      count: 0,
      task7: '',
      task8: '',
      task9: 'checkbox unchecked',
      task10: '',
      task11: 'item 0',
      width: 50,
      task13: 0,
      task14: 'flex',
    }

    this.task1 = this.task1.bind(this);
    this.task2 = this.task2.bind(this);
    this.plusCount = this.plusCount.bind(this);
    this.ResetCount = this.ResetCount.bind(this);
    this.task5Move = this.task5Move.bind(this);
    this.task6 = this.task6.bind(this);
    this.task7 = this.task7.bind(this);
    this.task9 = this.task9.bind(this);
    this.task10 = this.task10.bind(this);
    this.task11 = this.task11.bind(this);
    this.task12 = this.task12.bind(this);
    this.resetTask12 = this.resetTask12.bind(this);
    this.task13 = this.task13.bind(this);
    this.task14 = this.task14.bind(this);
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

  task5Move() {
    console.log('move')
  }

  task6(event) {
    console.log('***   TASK 7 ***');
    console.log(event.target.getAttribute('data'));
  }

  task7(event) {
    console.log(event.target.value.length);
    if (event.target.value.length < 6) {
      this.setState({
        task8: 'длина меньше 6',
      })
    } else {
      this.setState({
        task8: '',
      })
    }
    this.setState({
      task7: event.target.value,
    })
  }

  task9(event) {
    console.log(event.target.checked);

    if (event.target.checked === false) {
      this.setState({
        task9: 'checkbox unchecked',
      })
    } else {
      this.setState({
        task9: 'checkbox checked',
      })
    }
  }

  task10(event) {
    this.setState({
      task10: event.target.value,
    })
  }

  task11(event) {
    console.log(event.target.value);
    this.setState({
      task11: event.target.value,
    })
  }

  task12() {
    this.setState({
      width: this.state.width + 3,
    })
  }

  resetTask12() {
    this.setState({
      width: 50,
    })
  }

  task13(event) {
    this.setState({
      task13: event.target.value,
    })
  }

  task14(event) {
    if (event.target.classList.contains('img-hidden') == false) {
      event.target.classList.add('img-hidden')
      this.setState({
        task14: 'none',
      })
    } else {
      event.target.classList.remove('img-hidden')
      this.setState({
        task14: 'flex',
      })
    }

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

        {/* task 5 */}
        <div className="item">
          <h2>Task 5</h2>
          <p>Добавьте div зеленого цвета. Повесьте на него событие mousemove и при срабатывании выводите в консоль слово move.</p>
          <div className='block-green' onMouseMove={this.task5Move}></div>
        </div>

        {/* task 6 */}
        <div className="item">
          <h2>Task 6</h2>
          <p>Добавьте 2 кнопки с надписями atr1 и atr2. Задайте им атрибуты data = atr-1 и data = atr-2 соответственно. Добавьте по клику на кнопке метод (один и тот же). Метод должен выводить содержимое атрибута data в консоль.</p>

          <button data='atr-1' onClick={this.task6}>atr1</button>
          <button data='atr-2' onClick={this.task6}>atr2</button>
        </div>

        {/* task 7 */}
        <div className="item">
          <h2>Task 7</h2>
          <p>Добавьте input и параграф. При вводе текста в input - выводите в параграфе вводимый текст.</p>

          <input onInput={this.task7} />
          <p>{this.state.task7}</p>
          <p className='error-length'>{this.state.task8}</p>
        </div>

        {/* task 8 */}
        <div className="item">
          <h2>Task 8</h2>
          <p>Усложним задачу. Если длина вводимого текста меньше 6 символов - то выводите на страницу предупреждение о том, что длина меньше 6.</p>

          <p className='error-length'>{this.state.task8}</p>
        </div>

        {/* task 9 */}
        <div className="item">
          <h2>Task 9</h2>
          <p>Добавьте checkbox - при изменении его состояния выводите checkbox checked или checkbox unchecked в консоль.</p>

          <input type='checkbox' onChange={this.task9} />
          <p>{this.state.task9}</p>
        </div>

        {/* task 10 */}
        <div className="item">
          <h2>Task 10</h2>
          <p>Добавьте 3 radiobutton с одним именем. При изменении состояния radiobutton выводите value выбранного на страницу.</p>

          <input type='radio' value='radio 1' onChange={this.task10} name='task-10' />
          <input type='radio' value='radio 2' onChange={this.task10} name='task-10' />
          <input type='radio' value='radio 3' onChange={this.task10} name='task-10' />
          <p>{this.state.task10}</p>
        </div>

        {/* task 11 */}
        <div className="item">
          <h2>Task 11</h2>
          <p>Добавьте выпадающий список. При изменении состояния - выводите value выбранного на страницу.</p>

          <select onChange={this.task11} >
            <option value='value item 0'>item 0</option>
            <option value='value item 1'>item 1</option>
            <option value='value item 2'>item 2</option>
            <option value='value item 3'>item 3</option>
          </select>
          <p>{this.state.task11}</p>
        </div>

        {/* task 12 */}
        <div className="item">
          <h2>Task 12</h2>
          <p>Добавьте div и кнопку. При нажатии кнопки - увеличивайте ширину div на 3 px. Добавьте кнопку Reset позволяющую сбрасывать состояние до начальной ширины.</p>

          <div className='block-task12' style={{ width: this.state.width + 'px' }}></div>

          <button onClick={this.task12}>Add width</button>
          <button onClick={this.resetTask12}>Reset</button>
        </div>

        {/* task 13 */}
        <div className="item">
          <h2>Task 13</h2>
          <p>Добавьте полнузок. При изменении ползунка выводите его value на страницу.</p>

          <input onChange={this.task13} type='range' defaultValue='0' min='0' max='100' />
          <p>{this.state.task13}</p>
        </div>

        {/* task 14 */}
        <div className="item">
          <h2>Task 14</h2>
          <p>Добавьте кнопку и изображение. При клике на кнопку скрывайте изображение, при повторном клике - показывайте.</p>

          <button onClick={this.task14}>Task 14</button>
          <img src={imgTask14} style={{ display: this.state.task14 }} />
        </div>

      </div >
    );
  }
}

export default App;
