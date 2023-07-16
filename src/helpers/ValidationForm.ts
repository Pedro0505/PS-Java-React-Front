import dayjs from 'dayjs';
import ISearchForm from '../interfaces/ISearchForm';
import ISearchFormErrors from './interfaces/ISearchFormErrors';

class ValidationForm {
  private static readonly errorFields: ISearchFormErrors = {
    initialDateErrors: [],
    finalDateErrors: [],
    operatorNameErrors: [],
  };

  constructor(private readonly form: ISearchForm) {}

  private validateDateInputs() {
    const {finalDate, initialDate} = this.form;

    ValidationForm.errorFields.finalDateErrors = [];
    ValidationForm.errorFields.initialDateErrors = [];

    if (finalDate && initialDate) {
      const initialDateObj = dayjs(initialDate);
      const finalDateObj = dayjs(finalDate);

      if (finalDateObj.isBefore(initialDateObj)) {
        ValidationForm.errorFields.finalDateErrors.push(
          'A data de fim não pode ser anterior à data de início.',
        );
      }
    } else if ((finalDate && !initialDate) || (!finalDate && initialDate)) {
      ValidationForm.errorFields.finalDateErrors.push(
        'Se uma data for informada, a outra também precisa ser preenchida.',
      );
      ValidationForm.errorFields.initialDateErrors.push(
        'Se uma data for informada, a outra também precisa ser preenchida.',
      );
    }
  }

  public validateForm() {
    this.validateDateInputs();
  }

  public hasError() {
    const finalDateErrors = ValidationForm.errorFields.finalDateErrors;
    const initialDateErrors = ValidationForm.errorFields.initialDateErrors;
    const operatorNameErrors = ValidationForm.errorFields.operatorNameErrors;

    return (
      finalDateErrors.length !== 0 ||
      initialDateErrors.length !== 0 ||
      operatorNameErrors.length !== 0
    );
  }

  get getErrorFields(): ISearchFormErrors {
    return ValidationForm.errorFields;
  }
}

export default ValidationForm;
