import { Formik, Form } from 'formik'

import Input from './components/Input'
import Button from './components/Button'
import Section from './components/Section'
import Container from './components/Container'

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const App = () => {
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const value = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate),
    )

    console.log(value)
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Initial Deposit" />
            <Input name="contribution" label="Annual Contribution" />
            <Input name="years" label="Years" />
            <Input name="rate" label="Estimated Interest" />
            <Button>Calculate</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  )
}

export default App
