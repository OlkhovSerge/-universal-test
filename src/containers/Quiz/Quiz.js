import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'При движении на легковом автомобиле, оборудованном ремнями безопасности, кто должен быть пристегнут ?',
                rightAnswerId: 3,
                answers: [
                    {text: 'Только водитель', id: 1},
                    {text: 'Водитель и пассажир на переднем сиденье', id: 2},
                    {text: 'Все лица, находящиеся в автомобиле', id: 3},
                    {text: 'Только мой кот', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {

    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={ this.state.quiz[0].answers }
                        question={ this.state.quiz[0].question }
                        onAnswerClick={ this.onAnswerClickHandler }
                    />
                </div>
            </div>
        )
    }
}

export default Quiz