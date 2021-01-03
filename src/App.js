import React, {Component} from 'react';
import Grades from './components/grades/Grades';
import Calculations from './components/calculations/Calculations';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      modules: [
        {
          id: 1,
          description: "Módulo 01 - Fundamentos (0 - 100)",
          grades: 100,
        },
        {
          id: 2,
          description: "Módulo 02 - Angular (0 - 100)",
          grades: 100,
        },
        {
          id: 3,
          description: "Módulo 03 - React (0 - 100)",
          grades: 100,
        },
        {
          id: 4,
          description: "Módulo 04 - Vue (0 - 100)",
          grades: 100,
        },
        {
          id: 5,
          description: "Módulo 05 - Desafio Final (0 - 100)",
          grades: 100,
        },
      ],
      totalGrades: 0,
      average60Percent: true,
    };
  }

  componentDidMount() {
    this.CalculaGrades();
  }

  handleChangeGrade = (grade, index) => {
    const { modules } = this.state;
    /* aqui faz a alteracao das notas do array grades
     e em seguida faz o cálculo de acordo com a nota informada! */
    modules.map((item) => {
      if (item.id === index) {
        item.grades = grade;
      }
      return item;
    });
    this.CalculaGrades();
  };

  CalculaGrades = () => {
    const { modules } = this.state;
    let totalGrades = modules.reduce((acc, cur) => {
      return acc + cur.grades;
    }, 0);
    let validateAverage60Percent = modules.find((item) => {
      return item.grades < 60;
    });
    this.setState({
      totalGrades,
      average60Percent: validateAverage60Percent ? false : true,
    });
  };

  render() {
    const { modules, totalGrades, average60Percent } = this.state;
    return (
      <>
        <div className="row">
          <div className="col s6">
            <h4 style={styles.centeredTitle}>Notas atuais</h4>
            <div className="border">
              {modules.map((currentGrades) => {
                const { id, description } = currentGrades;
                return (
                  <div key={id}>
                    <Grades
                      labelName={description}
                      currentGrades={currentGrades}
                      onGradeChange={this.handleChangeGrade}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col s6">
            <h4 style={styles.centeredTitle}>Cálculos</h4>
            <Calculations
              modules={modules}
              totalGrades={totalGrades}
              average60Percent={average60Percent}
            />
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: "center",
  },
};