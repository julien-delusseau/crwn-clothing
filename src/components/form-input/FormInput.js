import React from 'react'
import {
  GroupInputContainer,
  FormInputContainer,
  FormInputLabel
} from './FormInput.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupInputContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupInputContainer>
  )
}

export default FormInput
