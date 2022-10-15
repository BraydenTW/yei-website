import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import type { NextComponentType, NextPageContext } from 'next'
import { useState } from 'react'
import FocusError from '../../utility/FocusError'
import * as Yup from 'yup'
import camelCase from '../../../utils/camelCase'
import { ArrowRightIcon } from '@heroicons/react/outline'

interface Props {}

const referralSources = [
  'Facebook',
  'Instagram',
  'LinkedIn',
  'Reddit',
  "From your school's economic club",
  'From a friend',
  'From your school admin/teachers/newsletters',
]
const Signup: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [submitted, setSubmitted] = useState(false)
  const fieldTypes = ['First Name', 'Last Name', 'Email', 'Grade', 'School']
  return (
    <div className="max-w-3xl w-full m-auto mb-16 px-6" id="register">
      <div className="space-y-2 text-lg text-gray-600">
        <h2 className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8">
          Interested? Signup!
        </h2>
        <p>
          Please make sure that you and your team meet all eligibility
          requirements before signing up for EconBowl. If you have already
          registered, please DO NOT submit this form a second time. Email{' '}
          <a
            className="text-yei-primary-darker font-medium"
            href="mailto:events@theyei.org"
          >
            events@theyei.org
          </a>{' '}
          if you need to make any changes to information previously submitted
          (team roster, email address, etc).
        </p>
        <h3 className="text-xl font-bold text-black pt-4">Eligibility</h3>
        <p>
          Each team must consist of{' '}
          <b>3-4 high school or middle school students</b>
          {` `}(U.S. grades 6-12 or equivalent in your country).{' '}
          <b>ONLY your team captain should be filling out this form.</b> The
          team captain will also be the one submitting the written exam on the
          day of the event.
        </p>
        <p className="text-sm italic text-gray-600">
          By registering and entering, you and your team members are agreeing to
          receive emails from the Youth Economics Initiatives regarding
          EconBowl, as well as future events and competitions.
        </p>
      </div>
      <Formik
        initialValues={{
          teamName: '',
          team: [
            { firstName: '', lastName: '', email: '', grade: '', school: '' },
            { firstName: '', lastName: '', email: '', grade: '', school: '' },
            { firstName: '', lastName: '', email: '', grade: '', school: '' },
            { firstName: '', lastName: '', email: '', grade: '', school: '' },
          ],
          referral: [],
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitted(false)
          let data = new FormData()

          console.log(values)
          data.append("Team Name", values.teamName);
          data.append("Team", values.team);
          data.append("How did you hear about us?", values.referral);

          data.append(
            '_cc',
            'admin@theyei.org,miriam@theyei.org,kavin@theyei.org,ian@theyei.org,expansion@theyei.org,henry@theyei.org'
          )
          data.append("_replyto", values.team[0].email);
          data.append("_subject", `EconBowl submission (THIS IS A TEST FROM THE WEB DEV DEPT. - IGNORE THIS)`);
          console.log(data);

          fetch(`https://formsubmit.co/ajax/ab3308b6570d4ffe111661f129ec434a `, {
            method: "POST",
            mode: "no-cors",
            body: data,
          });
          resetForm({})
          setSubmitting(false)
          setSubmitted(true)
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete="off">
            <div className="w-full max-w-2xl mx-auto mt-12 flex flex-col items-center justify-center">
              <div className="w-full">
                <label
                  htmlFor="teamName"
                  className="block text-xl font-medium text-gray-700"
                >
                  Team Name{' '}
                  <span className="text-gray-600 font-light text-xl">*</span>
                </label>
                <Field
                  type="text"
                  name="teamName"
                  id="teamName"
                  placeholder="The Econ Whiz Kids"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main sm:text-lg"
                />
                <ErrorMessage
                  className="formik-error"
                  component="div"
                  name="teamName"
                />
                <p className="italic text-gray-600 text-sm mt-2">
                  * If a name submitted is deemed inappropriate, it will be
                  replaced with a number.
                </p>
              </div>
              <div className="space-y-8 w-full mt-8">
                {new Array(4).fill('').map((item, teamNum) => {
                  return (
                    <div key={teamNum} className="w-full">
                      <p className="text-lg font-bold flex flex-col sm:flex-row sm:items-center mb-4">
                        {teamNum === 0
                          ? 'Team Captain'
                          : `Teammate #${teamNum + 1}`}
                        <span className="sm:pl-2 text-gray-500 text-sm font-medium mt-1 mb-2 sm:mt-0 sm:mb-0 italic">
                          {teamNum === 3 &&
                            ' (Having a 4th teammate is optional)'}
                        </span>
                      </p>

                      <div className="w-full grid grid-cols-8 gap-4 mt-2">
                        {fieldTypes.map((field, index) => {
                          const fieldKebab = `team[${teamNum}].${camelCase(
                            field
                          )}`
                          return (
                            <div
                              key={index}
                              className={` ${
                                field === 'Email'
                                  ? 'col-span-8'
                                  : field === 'Grade'
                                  ? 'col-span-3 sm:col-span-2'
                                  : field === 'School'
                                  ? 'col-span-5 sm:col-span-6'
                                  : 'col-span-8 sm:col-span-4'
                              }`}
                            >
                              <label
                                htmlFor={fieldKebab}
                                className="block text-base font-medium text-gray-700"
                              >
                                {field}
                              </label>
                              {field === 'Grade' ? (
                                <Field
                                  type="text"
                                  name={fieldKebab}
                                  id={fieldKebab}
                                  as="select"
                                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main"
                                >
                                  <option></option>
                                  <option>9th</option>
                                  <option>10th</option>
                                  <option>11th</option>
                                  <option>12th</option>
                                  <option>Other</option>
                                </Field>
                              ) : (
                                <Field
                                  type="text"
                                  name={fieldKebab}
                                  id={fieldKebab}
                                  className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yei-primary-main focus:border-yei-primary-main text-base`}
                                />
                              )}
                              <ErrorMessage
                                className="formik-error"
                                component="div"
                                name={fieldKebab}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8">
                <p className="text-lg font-bold">How did you hear about us?</p>
                <div
                  role="group"
                  aria-labelledby="checkbox-group"
                  className="grid grid-cols-2 gap-4 mt-2"
                >
                  {referralSources.map((source, index) => {
                    return (
                      <label className="text-gray-700 flex flex-row">
                        <Field
                          type="checkbox"
                          name="referral"
                          value={source}
                          className="h-4 w-4 rounded border-gray-300 text-yei-primary-main focus:ring-yei-primary-main focus:border-yei-primary-main text-base mt-1 mr-2"
                        />
                        {source}
                      </label>
                    )
                  })}

                </div>
                  <ErrorMessage
                    className="formik-error"
                    component="div"
                    name="referral"
                  />
              </div>
              <div className="w-full flex items-left justify-left">
                <button
                  type="submit"
                  className="mt-8 text-lg bg-yei-primary-main border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-white hover:bg-yei-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main flex items-center"
                >
                  Signup my Team{' '}
                  <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const RegisterSchema = Yup.object().shape({
  teamName: Yup.string()
    .max(50, 'Name too long.')
    .required('Team name required.'),
  team: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string()
        .max(50, 'Name too long.')
        .required('First name required.'),
      lastName: Yup.string()
        .max(50, 'Name too long.')
        .required('Last name required.'),
      email: Yup.string().email('Invalid email.').required('Email required.'),
      grade: Yup.string().required('Grade is required'),
      school: Yup.string().required('School name is required.'),
    })
  ),
  referral: Yup.array().min(1, 'Referral field is required.').of(Yup.string().required()).required('Referral field is required.'),
})

export default Signup
