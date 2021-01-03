import React, { Component } from 'react'
import css from "./calculations.module.css";
import {mediaGrades} from "./../../helpers/calculateGrades";
import { formatPercent } from "../../helpers/formatHelpers";

export default class Calculations extends Component {
  render() {
    const { modules, totalGrades, average60Percent } = this.props;
    return (
      <div className="border">
        <label className={css.resultLabel}>Nota total: </label>
        <span className={css.valueLabel}>{totalGrades}</span>
        <br />
        <label className={css.resultLabel}>Percentual total: </label>
        <span className={css.valueLabel}>
          {formatPercent(mediaGrades(totalGrades, modules.length) / 100)}
        </span>
        <br />
        <label className={css.resultLabel}>Aprovação pela média (60%)? </label>
        {average60Percent ? (
          <span className={css.approved}>Sim</span>
        ) : (
          <span className={css.disapproved}>Não</span>
        )}
        <br />
        <label className={css.resultLabel}>
          Aprovação pelo percentual total (70%)?
        </label>
         {mediaGrades(totalGrades, modules.length) >= 70 ? (
          <span className={css.approved}>Sim</span>
        ) : (
          <span className={css.disapproved}>Não</span>
        )}
      </div>
    );
  }
}
