import { useEffect, useState } from 'react'
import useFetch from './Hooks/useFetch'
import { QUESTIONS_GET, ANSWERS_GET } from './Api'
import Error from './Helper/Error'
import Question from './Components/Question'
import Spinner from './Components/Spinner'
import { CodeBlock, dracula } from 'react-code-blocks'

const App = () => {
  const { data, loading, error, request } = useFetch()
  const {
    data: answers,
    loading: loadingAnswers,
    request: requestAnswers
  } = useFetch()
  const [questions, setQuestions] = useState([])
  const getAnswers = () => {
    const { url, options } = ANSWERS_GET()
    requestAnswers(url, options)
  }
  const customStyle = {
    fontFamily: 'Fira Code',
    // height: '500px',
    // overflowY: 'scroll',
    borderRadius: '5px',
    boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
    marginBottom: '1rem'
  }

  useEffect(() => {
    const { url, options } = QUESTIONS_GET()
    request(url, options)
  }, [request])

  useEffect(() => {
    setQuestions(data)
    return () => {
      setQuestions([])
    }
  }, [data])

  useEffect(() => {
    setQuestions((prev) =>
      prev?.map((item) => {
        const answer = answers.find(
          (answer) => item.order.toLowerCase() === answer.order.toLowerCase()
        )
        return {
          ...item,
          answerIndexes: answer?.answerIndexes || null,
          textAnswer: answer?.textAnswer || null
        }
      })
    )
  }, [answers])

  if (error) return <Error error={error} />
  if (loading) return <Spinner />
  if (questions && questions.length > 0) {
    return (
      <div className='container'>
        <img className='logo' src='/virtualmind.png' alt='Virtualmind' />
        <button className='command_button' onClick={() => getAnswers()}>
          {loadingAnswers ? 'Loading...' : 'Get Answers'}
        </button>
        <p className='title'>Javascript</p>
        <p className='paragraph question'>
          A. The following code suffers from a known condition called “Pyramid
          of Doom”: If we were to chain more server calls together, then the{' '}
          <code>PlayerDetailsController.showTeammatesClick</code> method would
          go too deep and become very unstable. This doesn’t allow for a good
          way to handle error, or application state, if we were to react to each
          call in particular.
        </p>
        <p className='paragraph'>
          Tip: Check what $.ajax returns and its supported methods/hooks
        </p>
        <CodeBlock
          text={questions[0]?.data}
          language='javascript'
          showLinesNumbers={true}
          wrapLines
          customStyle={customStyle}
        />
        <p className='paragraph'>
          Refactor the code to use promises. Some Acceptance Criteria on the new
          code:
        </p>
        <ul>
          <li>Keep the object definitions the same as in the example.</li>
          <li>
            Keep the function signatures and interfaces exactly as they are,
            except for getPlayerTeamId and getPlayers, which should not expect
            the callback parameter.
          </li>
          <li>Do not use callback functions in any way</li>
          <li>
            If showTeammatesClick is called, then the playerList must be
            rendered at some point, assuming that we have a stable communication
            with the server
          </li>
        </ul>
        <div className='paragraph question'>
          <div>A.2) Extra points for doing A) with async/await</div>
          <div>(Please paste below links to your answers)</div>
        </div>
        {questions[0].textAnswer && (
          <>
            <p className='paragraph question color_red'>
              Answer for question A.1 and A.2:
            </p>
            <CodeBlock
              text={questions[0].textAnswer || ''}
              language='javascript'
              showLinesNumbers={true}
              theme={dracula}
              customStyle={customStyle}
            />
          </>
        )}

        <p className='paragraph question'>
          B.{' '}
          <a
            href='https://jsfiddle.net/2ku54eg9/'
            target={'_blank'}
            rel='noreferrer'
          >
            Collections Exercise
          </a>
        </p>
        <CodeBlock
          text={questions[1]?.data}
          language='javascript'
          showLinesNumbers={true}
          wrapLines
          customStyle={customStyle}
        />
        {questions[1].textAnswer && (
          <>
            <p className='paragraph question color_red'>
              Answer for question B:
            </p>
            <CodeBlock
              text={questions[1].textAnswer || ''}
              language='javascript'
              showLinesNumbers={true}
              theme={dracula}
              customStyle={customStyle}
            />
          </>
        )}

        <p className='paragraph question'>
          C.{' '}
          <a
            href='https://jsfiddle.net/2ku54eg9/'
            target={'_blank'}
            rel='noreferrer'
          >
            React Refactor Exercise
          </a>
        </p>
        <CodeBlock
          text={questions[2]?.data}
          language='javascript'
          showLinesNumbers={true}
          wrapLines
          customStyle={customStyle}
        />
        {questions[2].textAnswer && (
          <>
            <p className='paragraph question color_red'>
              Answer for question C:
            </p>
            <CodeBlock
              text={questions[2].textAnswer || ''}
              language='javascript'
              showLinesNumbers={true}
              theme={dracula}
              customStyle={customStyle}
            />
          </>
        )}

        {questions
          .filter((question) => question.type !== 'text')
          .map((question, index) => (
            <Question key={question.order} question={question} index={index} />
          ))}
      </div>
    )
  } else return null
}
export default App
