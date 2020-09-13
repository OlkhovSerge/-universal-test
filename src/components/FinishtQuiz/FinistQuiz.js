import React from 'react';
import classes from './FinistQuiz.module.css';

const FinishQuiz = props => {

    return (
        <div className={classes.FinishQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    fgdf
                    <i className={'fa fa-times ' + classes.error} />
                </li>
                <li>
                    <strong>1. </strong>
                    fgdf
                    <i className={'fa fa-check ' + classes.success} />
                </li>
            </ul>
            <p>Правильно 4 из 10</p>
            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishQuiz